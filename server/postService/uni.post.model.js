import mongoose from "mongoose";

const uniPostSchema = new mongoose.Schema({
    category: {
        type: String,
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