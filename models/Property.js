import mongoose from 'mongoose'

export const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['Apartment', 'House', 'Condo', 'Villa', 'Townhouse', 'Commercial'],
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['For Sale', 'For Rent'],
        required: true,
        trim: true
    },
    bedrooms: {
        type: Number,
        required: true,
        min: 1
    },
    bathrooms: {
        type: Number,
        required: true,
        min: 1
    },
    area: {
        type: Number,
        required: true,
        min: 1
    },
    yearBuilt: {
        type: Number,
        required: true,
        min: 1960,
        max: new Date().getFullYear() // Current year
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: [String],
        validate: {
            validator: function(images) {
                return images.length <= 5;
            },
            message: 'You can upload up to 5 images'
        }
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    surcharges: {
        type: [String],
        trim: true
    },
    user: {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            trim: true
        },
        contact: {
            type: String,
            required: true,
            trim: true
        }
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Property = mongoose.model('Property', propertySchema);

export default Property;
