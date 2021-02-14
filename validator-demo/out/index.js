"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const express = require("express");
const express_joi_validation_1 = require("express-joi-validation");
// This is optional, but without it you need to manually generate
// a type or interface for ValidatedRequestSchema members
require("joi-extract-type");
const app = express();
const validator = express_joi_validation_1.createValidator();
const querySchema = Joi.object({
    name: Joi.string().required()
});
app.get('/hello', validator.query(querySchema), (req, res) => {
    // Woohoo, type safety and intellisense for req.query!
    res.end(`Hello ${req.query.name}!`);
});
app.listen('8080', () => {
    console.log("running on port 8080");
});
//# sourceMappingURL=index.js.map