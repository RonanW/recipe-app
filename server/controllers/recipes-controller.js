const Recipe = require('../models/recipe');

exports.getAll = (req, res) => {
	Recipe.find({}, function (err, recipes) {
		res.send(recipes);
	});
}

exports.getById = (req, res) => {
	Recipe.find({_id: req.params.id}, function (err, recipe) {
		res.send(recipe);
	});
}

exports.search = (req, res) => {
	const filter = req.query.filter;
	const val = (filter === 'time' ? {$gt : req.query.value} : new RegExp(req.query.value, 'i'))
	const searchQuery = {
		[filter] : val
	};
	Recipe.find(searchQuery, function (err, recipes) {
		res.send(recipes);
	});
}