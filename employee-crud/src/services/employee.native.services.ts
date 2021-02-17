const {ExecuteQuery} = require("../shared/query-executer");
const { EmployeeDataQueries } = require( '../queries/employee-data.query');
const {CreateRabbitMQConnection} = require("../rabbitMqConn/connection");
const lodash = require("lodash");
class EmployeeNativeService {
    public static  async getEmployeeService() {
       const qry = EmployeeDataQueries.getEmployeeRecords();
       let employee = await ExecuteQuery(qry);
       let status: boolean = true;
       let message = "Success";
        if(!employee) {
            message = "Employee Not Found";
            employee = null;
            status = false;
        }
        return { status: status, message: message, data: employee };
    }
    public static  async addEmployeeService(data: any) {
        let datas = [];
        datas.push([data.name,data.email,data.age,data.phone]);
        let message: string = '';
        try {
            let qry = EmployeeDataQueries.checkEmployeeRecords(`email= '${data.email}'`);
            let getDuplicate = await ExecuteQuery(qry);
            if(lodash.isEmpty(getDuplicate)) {
                const qry = EmployeeDataQueries.addEmployeeRecords();
                await ExecuteQuery(qry, datas);
                message = "Employee has been saved";
                const channel =  await CreateRabbitMQConnection.createConnection();
                channel.assertQueue("employeeQueue", {
                    durable: false
                });
                channel.sendToQueue("employeeQueue", Buffer.from(message));
            }
            else {
                message = "Employee already exist";
            }
            
            return { status: true, message: message};
        }
        catch(err){
            console.log(err); 
            return { status: true, message: "Something went wrong"};
        };
       
    }
    public static async updateEmployeeService(data, employeeId) {
        let message: string;
        let qry = EmployeeDataQueries.checkEmployeeRecords(`empid= ${employeeId}`);
        let checkRecord = await ExecuteQuery(qry);
        let status: boolean = false;
        if(!lodash.isEmpty(checkRecord)) {
            let qry = EmployeeDataQueries.updateEmployeeRecords(data, `empid=${employeeId}`);
            await ExecuteQuery(qry);
            message = "Employee Updated Successfully";
            status = true;
            
            console.log(message);
        }
        else {
            message = "Employee Not Found";
        }
        return { status: status, message: message};
    }
    public static async deleteEmployeeService(employeeId) {
        let message: string;
        let qry = EmployeeDataQueries.checkEmployeeRecords(`empid= ${employeeId}`);
        let checkRecord = await ExecuteQuery(qry);
        let status: boolean = false;
        if(!lodash.isEmpty(checkRecord)) {
            let qry = EmployeeDataQueries.deleteEmployeeRecords(employeeId);
            await ExecuteQuery(qry);
            message = "Employee Removed Successfully";
            status = true;
        }
        else {
            message = "Employee Not Found";
        }
        return { status: status, message: message};
    }
}
export = {EmployeeNativeService};