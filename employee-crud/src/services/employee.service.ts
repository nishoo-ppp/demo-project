import { getManager, Repository, getRepository } from 'typeorm';
import { Employee } from '../entity/Employee';

class EmployeeService {
    
    public static  async addEmployeeService(data: any) {
        const employee = new Employee();
        employee.name = data.name;
        employee.email = data.email;
        employee.age = data.age;
        employee.phone = data.phone;
        let message: string = '';
        let saved: Employee;
       try {
            let getDuplicate: any = await this.checkDuplicate({"email":data.email});
            let result: Employee;
            if(!getDuplicate) {
                result = await getManager().transaction(async connection=>{
                    let employeeRepository = connection.getRepository(Employee);
                    saved = await employeeRepository.save(employee);
                    return saved;
                });
                message = "Employee has been saved";
            }
            else {
                message = "Employee already exist";
                result = getDuplicate;
            }
            
            return { status: true, message: message, data: result };
        }
        catch(err){
            console.log(err); 
            return { status: true, message: "Something went wrong"};
        };
       
    }
    private static async checkDuplicate(queryData) {
        let employeeRepository = getRepository(Employee);
        let getResult = employeeRepository.findOne(queryData);
        return getResult;
       
    }
    public static async updateEmployeeService(data, employeeId) {
        let message: string;
        let employee = await this.checkDuplicate({"empid": employeeId});
        let status: boolean = false;
        if(employee) {
            let employeeRepository = getRepository(Employee);
            employee.email = data.email;
            employee.name = data.name;
            employee.phone = data.phone;
            await employeeRepository.save(employee);
            message = "Employee Updated Successfully";
            status = true;
        }
        else {
            message = "Employee Not Found";
            employee = null;
        }
        return { status: status, message: message, data: employee };
    }
    public static async getEmployeeService() {
        let message: string = "success";
        const employeeRepository = await getRepository(Employee);
        let employee = await employeeRepository.find();
        let status: boolean = true;
        if(!employee) {
            message = "Employee Not Found";
            employee = null;
            status = false;
        }
        return { status: status, message: message, data: employee };
    }
    public static async deleteEmployeeService(employeeId) {
        let message: string;
        let employee = await this.checkDuplicate({"empid": employeeId});
        let status: boolean = false;
        if(employee) {
            let employeeRepository = getRepository(Employee);
            employeeRepository.remove(employee);
            message = "Employee Removed Successfully";
            status = true;
        }
        else {
            message = "Employee Not Found";
            employee = null;
        }
        return { status: status, message: message, data: employee };
    }
}
export { EmployeeService };