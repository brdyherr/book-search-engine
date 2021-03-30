const { Schema } = require('mongoose');

const authorSchema = new Schema(
    {
        authorTitle: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = authorSchema;