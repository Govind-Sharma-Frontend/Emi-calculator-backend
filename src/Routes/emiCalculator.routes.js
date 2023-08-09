const router = require('express').Router();
const emiValidation = require('../validations/emiValidation.js')

const emiCalculatorService = require('../Services/emiCalculator.service');
const validate = require('../middleWare/validate');

router.post('/calculateEmiAmount', validate(emiValidation.emiValidationSchema), emiCalculatorService.calculateEmiAmount);

module.exports= router;