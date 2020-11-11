const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username: String,
    password: String,
    facebookID: String,
    googleID: String,
    places: [String]
}, {
    timestamps: true
})

module.exports = model("User", userSchema)