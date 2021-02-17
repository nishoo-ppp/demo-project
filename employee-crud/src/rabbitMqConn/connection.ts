const amqp = require('amqplib/callback_api');
import { resolve } from 'url';
import { promisify } from 'util';

export class CreateRabbitMQConnection {
    public static async createConnection() {
        const connection = new Promise((resolve, reject)=>{
            amqp.connect(process.env.RABBITQUEUE_UR, (err, connection)=>{
                    resolve(connection.createChannel());
                })
            })
        return await connection;
    }
}
