const mongoose = require("mongoose")
const birdsSchema = mongoose.Schema({
    Name: String,
    LifeSpan: String,
    Speed: Number
})
module.exports = mongoose.model("birds",
    birdsSchema)