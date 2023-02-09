const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/date");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "Please let us know what you think",
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: ,
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;