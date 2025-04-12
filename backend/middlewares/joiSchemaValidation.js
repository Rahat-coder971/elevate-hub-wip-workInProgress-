const joi = require('joi');
const httpstatus = require('../utils/https.status');
const Apierror = require('../helper/costumapierror');

const validationSource = {
    BODY: 'body',
    QUERY: 'query',
    PARAM: 'params',
    HEADER: 'headers'
};

module.exports = (schema, source = validationSource.BODY) => (req, res, next) => {
    const { error } = schema.validate(req[source]);

    if (!error) {
        console.log('no error in validation');
        return next();
    }
    try {
        console.log("there is some error in Joi validation:", error);

        const message = error.details.map((i) => i.message.replace(/['"]+/g, "")).join(",");


        throw new Apierror(httpstatus.badRequest, message);
    }
    catch (err) {
        console.log('error api', err);
        next(err); // pass to global error handler
    }
};
