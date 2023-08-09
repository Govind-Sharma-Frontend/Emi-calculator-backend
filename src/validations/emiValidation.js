const Joi = require("joi");

const emiValidationSchema = {
  body: Joi.object().keys({
    loanAmount: Joi.string().required().messages({'any.required': 'Loan Amount is required'}),
    interestRate: Joi.number().required().messages({'any.required': 'Interest Rate is required'}),
    month: Joi.string().required().messages({'any.required': 'Month is required'}),
  }),
};

module.exports = { emiValidationSchema };
