import "reflect-metadata";
import * as mysql from 'mysql';
const express = require("express");
const app = express();
import {createConnection, getConnection} from "typeorm";
import { MysqlConnectionCredentialsOptions } from "typeorm/driver/mysql/MysqlConnectionCredentialsOptions";
class Database {
    private static instance: any = null;
    private mysqlnativepool:mysql.Pool;
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
        this.mysqlnativepool = pool;
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
    public getDedicatedConnectionFromPool(): Promise<mysql.PoolConnection> {
        const self = this;
        return new Promise((resolve, reject) => {
            self.mysqlnativepool.getConnection((err: any, connection: any) => {
                if (err) {
                    return reject(err);
                }
                return resolve(connection);
            });
        });
    }

    
}

export { Database };


