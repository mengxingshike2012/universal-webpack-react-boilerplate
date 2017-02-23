'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi.object().keys({
        'value': joi.number(),
    }),
    params: joi.object().keys({
        'id': joi.number().integer().required(),
    }), 
}