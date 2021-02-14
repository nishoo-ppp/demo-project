import * as Joi from 'joi'
import * as express from 'express'
import {
  // Use this as a replacement for express.Request
  ValidatedRequest,
  // Extend from this to define a valid schema type/interface
  ValidatedRequestSchema,
  // Creates a validator that generates middlewares
  createValidator
} from 'express-joi-validation'
 
// This is optional, but without it you need to manually generate
// a type or interface for ValidatedRequestSchema members
import 'joi-extract-type'
 
const app = express()
const validator = createValidator()
 
const querySchema = Joi.object({
  name: Joi.string().required()
});
 

app.get('/hello',validator.query(querySchema),(req , res) => {
    // Woohoo, type safety and intellisense for req.query!
    res.end(`Hello ${req.query.name}!`)
  }
);
app.listen('8080', ()=>{
  console.log("running on port 8080");
});