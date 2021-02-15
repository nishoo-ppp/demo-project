const {ExecuteQuery} = require("../shared/query-executer");
const { EmployeeDataQueries } = require( '../queries/employee-data.query');
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
}
export = {EmployeeNativeService};