const {ExecuteQuery} = require("../shared/query-executer");
const { EmployeeDataQueries } = require( '../queries/employee-data.query');
const express = require("express");
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
        let result;
        
       try {
            let getDuplicate = false;
            if(!getDuplicate) {
                const qry = EmployeeDataQueries.addEmployeeRecords();
                let employee = await ExecuteQuery(qry, datas);
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
}
export = {EmployeeNativeService};