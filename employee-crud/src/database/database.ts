import "reflect-metadata";
const mysql = require("mysql");
const express = require("express");
const app = express();
import {createConnection, getConnection} from "typeorm";
class Database {
    private static instance: any = null;
    constructor() {
        const pool = mysql.createPool({
            connectionLimit: 10,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });
        pool.on('error', (err) => {
            console.log('pool connection err >>>>>>' + err);
            process.exit(1);
        });
        app.set("DB", pool);
    }
    public static async getDBInstance() {
        if (!Database.instance) {
            try {
                let isTypeOrmIntialized = false;
                try {
                    const ormConnection = getConnection();
                    isTypeOrmIntialized = true;
                } catch (error) {
                    isTypeOrmIntialized = false;
                }
                if (!isTypeOrmIntialized) {
                    await createConnection();
                }
                console.log('Type ORM\'s DB connection created');
                Database.instance = new Database();
            } catch (error) {
                console.log('DB Connection ERROR! ' + error);
                process.exit(1);
            }
        }
        return Database.instance;
    }
    
}

export { Database };


