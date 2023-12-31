//Reaction.js mongoose model
const { Schema, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //use moment node package to format date
            get: createdAtVal => moment(createdAtVal).format('DD MM YYYY hh:mm:ss')
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = ReactionSchema;