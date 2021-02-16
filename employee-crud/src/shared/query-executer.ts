import { Database } from "../database/database";

// const { Database } = require('../database/database');
const express = require("express");
const app = express();
export const ExecuteQuery = async (qry: string, data?: any, con?: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        let db:Database = await Database.getDBInstance();
        let poolConn = await db.getDedicatedConnectionFromPool();
        let connection = con || poolConn;
        
        if (connection) {
            if (data) {
                connection.query(qry, [data], async (err: Error, result: any) => {
                    if (err) {
                        // logger.error('error ' + err);
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
            }
            else {
                connection.query(qry, async (err: Error, result: any) => {
                    if (err) {
                        // logger.error('error ' + err);
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
            }
        }
        else {
            reject('Database not intialized yet');
        }
        
    });
};