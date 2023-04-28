
const mongoose = require("mongoose")
const birdsSchema = mongoose.Schema({
    //Name: String,
    //LifeSpan: String,
   // Speed: Number,
    Name: {
        type: String,
        required: true

    },
    LifeSpan: {
        type: String,
        required: true

    },
    Speed: {
        type: Number,
        required: true,
        min : 0,
        max : 100

    }
})

module.exports = mongoose.model("birds",
    birdsSchema);

