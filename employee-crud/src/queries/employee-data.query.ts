export class EmployeeDataQueries {
    public static getEmployeeRecords() {
        return "SELECT * FROM employee";
    }
    public static updateEmployeeRecords(data, queryData) {
        return `UPDATE employee SET name='${data.name}', email='${data.email}', age=${data.age}, phone='${data.phone}' WHERE ${queryData}`;
    }
    public static addEmployeeRecords() {
        return "INSERT INTO employee(name, email, age, phone) VALUES ?";
    }
    public static deleteEmployeeRecords(employeeId) {
        return `DELETE FROM employee WHERE empid=${employeeId}`;
    }
    public static checkEmployeeRecords(queryData) {
        return `SELECT * FROM employee WHERE ${queryData}`;
    }
}