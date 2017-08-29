"use strict"
import React from "react"
import { Link } from 'react-router-dom'

import RecipesStore from '../stores/RecipesStore'
import * as RecipesActions from '../actions/RecipesActions'

class Recipe extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.id = this.props.match.params.id
		this.state = {
		  recipe: RecipesStore.getRecipe()
		}
		RecipesActions.getRecipe(this.id)
	}

	componentWillMount() {
		RecipesStore.on('change', () => {
			this.setState({
				recipe: RecipesStore.getRecipe()
			})
		})
	}

	render() {
		const { recipe } = this.state;
		const ingredients = recipe.ingredients.map((ingredient, i) =>
			<div class="row" key={i}>
				<strong>{ingredient.name}</strong> <span>{ingredient.quantity}</span>
			</div>
		)
		const steps = recipe.steps.map((step, i) => 
			<li key={i}>{step}</li>
		)

		return (
			<div  class="container">
				<Link to='/recipe-list'>back to recipes</Link>
				<h1>Recipe for {recipe.name}</h1>
				<br />
				<h3>Cooking time</h3>
				<span>{recipe.time} minutes</span>
				<br />
				<img src={recipe.imageURL} height="500" />
				<br />
				<h3>Ingredients</h3>
				<div class="col-md-12">{ingredients}</div>
				<br />
				<br />
				<h3>Instructions</h3>
				<ul>{steps}</ul>
			</div>
		)
	}
}

export default Recipe