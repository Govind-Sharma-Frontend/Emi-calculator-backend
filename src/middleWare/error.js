const mongoose = require('mongoose');
const httpStatus = require('http-status');
// const config = require('../config/config');
// const logger = require('../config/logger');
const ApiError = require('./apiError');
// const Log = require('../models/log.model');

const errorConverter =async (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
//logging error and stack
    var startTime = +req._startTime;
    var endTime = +new Date();
  
    var ip =
      req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      (req.connection.socket ? req.connection.socket.remoteAddress : null);
  
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    
    // var objLog = new Log({
    //   url: fullUrl,
    //   headers: req.headers,
    //   method: req.method,
    //   params: req.body,
    //   ip_address: ip,
    //   start_time: startTime,
    //   end_time: endTime,
    //   rtime: endTime - startTime,
    //   status: statusCode,
    //   logType:'error',
    //   response: { message, code: statusCode, status:false },
    //   stack:err.stack
    // });

    //await objLog.save();
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
//   if (config.env === 'production' && !err.isOperational) {
//     statusCode = httpStatus.INTERNAL_SERVER_ERROR;
//     message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
//   }

  res.locals.errorMessage = err.message;
  console.log("err.message",err.message);

  const response = {
    code: statusCode,
    message,
  };

  res.status(statusCode).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
};
