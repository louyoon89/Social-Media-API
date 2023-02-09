const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/date");

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;