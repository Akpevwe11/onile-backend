const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, required: true}, 
    price: {type: Number, required: true},
    location: {type: String, required: true},
    bathrooms: {type: Number, required: true},
    area: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    createdAt: {
        type: Date,
        default: Date.now 
    }, 
    updatedAt: {
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema)