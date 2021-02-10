// lib/app.ts
import express from 'express';
import mongodb from 'mongodb';
// Create a new express application instance
const app: express.Application = express();
const conn = mongodb.connect("mongodb+srv://leave-manage:12345@cluster0.gmd8g.mongodb.net/productManagement?retryWrites=true&w=majority", { useUnifiedTopology: true });
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