const mongoose = require("mongoose")

const PetSchema = new mongoose.Schema({
    petName:{
        type: String,
        required: [true, "Name must be provided"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    petType:{
        type: String,
        required: [true, "Pet type must be provided"],
        minlength: [3, "Type must be at least 3 characters"]
    },
    petDescription:{
        type: String,
        required: [true, "Description must be provided"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3: {
        type: String
    }
}, {timestamps:true})


const Pet = mongoose.model("Pet", PetSchema)
module.exports.Pet = Pet
