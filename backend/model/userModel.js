const { model } = require('mongoose');

const { userSchema } = require("../schemas/userSchema.js");

const userModel = new model("user", userSchema);

module.exports = { userModel };