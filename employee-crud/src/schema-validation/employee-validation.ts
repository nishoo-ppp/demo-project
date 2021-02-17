const Joi = require('joi');
const EmployeeSchema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().required(),
    phone: Joi.string().max(10).required()
});

const EmployeeValidations = {
    EmployeeSchema
}
export {EmployeeValidations};