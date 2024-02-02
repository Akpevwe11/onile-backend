import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    },
    rating: {
        type: Number,
        required: true 
    },
    comment: String,
});

const Review = mongoose.model('Review', ReviewSchema);