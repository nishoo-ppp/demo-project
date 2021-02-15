const { Database } = require('../database/database');
const express = require("express");
const app = express();
export const ExecuteQuery = async (qry: string, data?: any, con?: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        let db = await Database.getDBInstance();
        console.log(app);
        let poolConn = app.get('DB');
        let connection = con || poolConn;
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
            if (!connection) {
                await Database.getDBInstance();
                poolConn = app.get('DB');
                connection = con || poolConn;
            }
            if (connection) {
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
            else {
                reject('Database not intialized yet');
            }
        }
    });
};