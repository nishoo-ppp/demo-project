// lib/app.ts
import express from 'express';
import mongodb from 'mongodb';
require('dotenv').config();
// Create a new express application instance
const app: express.Application = express();
let db_url:any = process.env.DB_URL;
const conn = mongodb.connect(db_url, { useUnifiedTopology: true });
(async()=>{
  app.get('/', async (req, res) =>{
    let mongoConn = await conn;
    let db = mongoConn.db("productManagement");
    let data:string[] = await db.collection("users").find().toArray();
    console.log(data);
    res.send({
      "status":"200",
      "data":data
    });
  });
})();
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});