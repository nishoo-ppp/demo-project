import { Request, Response, Router, NextFunction, response } from 'express';
import {EmployeeService} from "../services/employee.service";
const {EmployeeNativeService} = require("../services/employee.native.services");
class EmployeeRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.mountRoutes();
    }
    private mountRoutes() {
        this.router.get("/", this.getEmployee);
        this.router.post("/add", this.addEmployee);
        this.router.post("/update/:employeeId", this.updateEmployee);
        this.router.get("/delete/:employeeId", this.deleteEmployee);
        this.router.get("/native", this.getNativeEmployee);
    }
    async getNativeEmployee(req: Request, res: Response, next: NextFunction) {
        let result = await EmployeeNativeService.getEmployeeService();
        return res.status(200).json(result);
    }
    async addEmployee(req: Request, res: Response, next: NextFunction) {
        let data = req.body;
        let result = await EmployeeService.addEmployeeService(data);
        // return res.status(HttpStatusCodes.ok).json(result);
        return res.status(200).json(result);
    }
    async updateEmployee(req: Request, res: Response, next: NextFunction) {
        let data = req.body;
        let result = await EmployeeService.updateEmployeeService(data, req.params.employeeId);
        return res.status(200).json(result);
    }
    async getEmployee(req: Request, res: Response, next: NextFunction) {
        let result = await EmployeeService.getEmployeeService();
        return res.status(200).json(result);
    }
    async deleteEmployee(req: Request, res: Response, next: NextFunction) {
        let result = await EmployeeService.deleteEmployeeService( req.params.employeeId );
        return res.status(200).json(result);
    }
}
module.exports = new EmployeeRouter().router;