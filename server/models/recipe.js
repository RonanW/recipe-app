const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientsObject = Schema({
    quantity: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    }
}, {_id: false});

const RecipeSchema = Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [IngredientsObject],
    steps: [{        
        type: String,
        required: false
    }],
    time: {
        type: Number,
        required: true
    },
    imageURL: {
        type: String,
        required: false
    }
});

const Recipe = mongoose.model('recipe', RecipeSchema);
module.exports = Recipe
