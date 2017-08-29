import dispatcher from "../dispatcher"
import axios from 'axios'
import RecipesApi from '../utils/RecipesApi'

export function getRecipes() {
 RecipesApi.getAll().then((data) => {
		dispatcher.dispatch({
			type: "UPDATE_RECIPES",
			recipes: data
		})
	})
}

export function getRecipe(id) {
	RecipesApi.getById(id).then((data) => {
		dispatcher.dispatch({
			type: "RECIEVE_RECIPE",
			recipe: data
		})
	})
}

export function loadData() {
	RecipesApi.getAll().then((data) => {
		dispatcher.dispatch({
			type: "RECIEVE_RECIPES",
			recipes: data
		})
	})
}

export function search(query) {
	RecipesApi.search(query).then((data) => {
		dispatcher.dispatch({
			type: "RECIEVE_RECIPES",
			recipes: data
		})
	})
}