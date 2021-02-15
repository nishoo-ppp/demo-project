"use strict";
exports.__esModule = true;
var Joi = require("joi");
var express = require("express");
var express_joi_validation_1 = require("express-joi-validation");
// This is optional, but without it you need to manually generate
// a type or interface for ValidatedRequestSchema members
require("joi-extract-type");
var app = express();
var validator = express_joi_validation_1.createValidator();
var querySchema = Joi.object({
    name: Joi.string().required()
});
app.get('/hello', validator.query(querySchema), function (req, res) {
    // Woohoo, type safety and intellisense for req.query!
    res.end("Hello " + req.query.name + "!");
});
app.listen('8080', function () {
    console.log("running on port 8080");
});
