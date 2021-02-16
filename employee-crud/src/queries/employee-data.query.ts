export class EmployeeDataQueries {
    public static getEmployeeRecords() {
        return "SELECT * FROM employee";
    }
    public static updateEmployeeRecords() {
        return "SELECT * FROM employee";
    }
    public static addEmployeeRecords() {
        return "INSERT INTO employee(name, email, age, phone) VALUES ?";
    }
    public static deleteEmployeeRecords() {
        return "SELECT * FROM employee";
    }
}