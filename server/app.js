const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const app = express();
const recipesController = require('./controllers/recipes-controller');
const url = 'mongodb://localhost/recipe-app';
const db = mongoose.connect(url);

//public dir
app.use(express.static(path.join(__dirname, '/..', '/public')));

//routes
app.get('/api/recipes', recipesController.getAll);
app.get('/api/recipe/:id', recipesController.getById);
app.get('/api/recipes/search', recipesController.search);

//everything else handled by front end
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.listen(3000, function () {
	console.log('listening on port 3000!');
});