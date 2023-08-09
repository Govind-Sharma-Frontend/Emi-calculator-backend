const express = require("express");
const app = express();  
const bodyParser = require('body-parser');
const route = require('./Routes/emiCalculator.routes');
const CORS = require('cors');
const { errorConverter, errorHandler } = require('./middleWare/error');
app.use(CORS());
app.options("*",CORS());


app.use(bodyParser.json());


app.use('/v1', route);

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.response.sendJSONResponse = function (code, status = true, message, data) {
console.log(message);
    // utils.logResponse({ req: this.req, data, message, status, statusCode: code });
    //return this.status(code).json({ code, status, message, ...data });
    return this.status(code).json({ code, status, message, data:{...data} });
  };
module.exports = app;
