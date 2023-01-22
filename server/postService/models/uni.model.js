const mongoose = require("mongoose");


const uniPostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name cannot be empty."]
    },
    category: {
        type: String,
        enum: ['General', "Admission", "Courses", "Finance", "Professor"],
        default: "General",
        required: [true, "Has to be in one Category"]
    },
    title: {
        type: String,
        required: [true, "Title cannot be empty"]
    },
    description: {
        type: String,
        required: [true, "Please add the description"]
    },
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: [true, "An email is required"]
    }
})

const UniPost = mongoose.model("UniPost", uniPostSchema);
module.exports = UniPost;
