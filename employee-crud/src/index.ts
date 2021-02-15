import "reflect-metadata";
const dotenv = require("./config/load-env");
import {createConnection} from "typeorm";
import {Employee} from "./entity/Employee";
import {Database} from "./database/database";
// import express from "express";
const express = require("express");
const app = express();
const EmployeeRouter = require("./routes/EmployeeRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/employee", EmployeeRouter);
(async()=>{
    await Database.getDBInstance();
    const port = process.env.PORT || 3003;
    app.listen(port, () => {
        console.log('Employee management on port: ' + port);
    });
})();
