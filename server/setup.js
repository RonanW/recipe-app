const mongoose = require('mongoose');
const url = 'mongodb://localhost/recipe-app';
const db = mongoose.connect(url);
const Recipe = require('./models/recipe');
const recipes = require('../resources/recipes');

for (var i = 0; i < recipes.length; i++) {
	const recpipe = new Recipe(recipes[i]);
	recpipe.save(function (err) {
		if (err) {
			console.log('err', err)
		}
	});
}

