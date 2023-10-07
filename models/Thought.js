//Thought.js mongoose model
const { Schema, Types } = require('mongoose');
const moment = require('moment');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //use moment node package to format date
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        },
        // use ReplySchema to validate data for a reply
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false // set to false because this is a virtual that Mongoose returns, and we don't need it
    }
);

module.exports = ThoughtSchema;