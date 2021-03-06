'use strict';
const joi = require('joi');
const Chance = require('chance');
const schemaToJoi = require('utils/schemaToJoi');
const chance = new Chance();
module.exports = function* (params, query, body, user) {
    return schemaToJoi({
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "id": {
                "type": "integer"
            }
        }
    }
});
};
