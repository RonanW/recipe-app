import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import RecipesApi from '../utils/RecipesApi'

class RecipesStore extends EventEmitter {
	constructor() {
		super()
		// TODO refactor this
		this.recipes = [];
		this.recipe ={};
		this.recipe.steps = [];
		this.recipe.ingredients = [];
	}

	setRecipes(recipes) {
		this.recipes = recipes;
	}

	setRecipe(recipe) {
		this.recipe = recipe;
	}

	getAll() {
		return this.recipes;
	}

	getRecipe() {
		return this.recipe;
	}

	handleActions(action) {
		switch(action.type) {
			case 'RECIEVE_RECIPES': {
			this.setRecipes(action.recipes);
			this.emit("change");
			break
		}
			case 'RECIEVE_RECIPE': {
			this.setRecipe(action.recipe);
			this.emit("change");
			break
		}
		case "UPDATE_RECIPES": {
			this.recipes = action.recipes;
			this.emit("change");
			break
		}
		}
	}

}

const recipesStore = new RecipesStore;
dispatcher.register(recipesStore.handleActions.bind(recipesStore));

export default recipesStore;