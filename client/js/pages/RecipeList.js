import React from "react"
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import List from "../components/List"
import CookingTimeFilter from "../components/CookingTimeFilter"

import RecipesStore from '../stores/RecipesStore'
import * as RecipesActions from '../actions/RecipesActions'

class RecipeList extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			recipes: RecipesStore.getAll(),
			selectValue: 1,
			timeValue: 13,
		}
		RecipesActions.getRecipes()
	}

	componentWillMount() {
		RecipesStore.on('change', () => {
			this.setState({
				recipes: RecipesStore.getAll()
			})
		})
	}

	handleSelectChange (event, index, value) {
		this.setState({
			selectValue: value
		})
	}

	handleTimeChange(value) {
		this.setState({
			timeValue: value
		})
	}

	searchRecipes(e) {
		const val = this.getFilter() === 'time' ? this.state.timeValue : e.target.value;
		const query = {
			filter: this.getFilter(),
			value: val
		}
		RecipesActions.search(query)
	}

	getFilter() {
		switch (this.state.selectValue) {
			case 1: {
				return 'name'
				break
			}
			case 2: {
				return 'ingredients.name'
				break
			}
			case 3: {
				return 'time'
				break
			}
		}
	}
	//TODO refactor, too tightly coupled
	render() {
		return (
			<div>
				<h1>RecipeList</h1>
				<div>
					<div>
						<SelectField
						floatingLabelText="Search by"
						value={this.state.selectValue}
						onChange={this.handleSelectChange.bind(this)}>
							<MenuItem value={1} primaryText="Name" />
							<MenuItem value={2} primaryText="Ingredients" />
							<MenuItem value={3} primaryText="Cooking time" />
						</SelectField>
					</div>
					<div>
						{
							this.state.selectValue !== 3
							? <TextField
								hintText="Full width"
								fullWidth={true}
								onChange={this.searchRecipes.bind(this)}
							/>
							: <CookingTimeFilter
								value={this.state.timeValue}
								handleChange={this.handleTimeChange.bind(this)}
								handleChangeComplete={this.searchRecipes.bind(this)}
							/>
						}
					</div>
				</div>
				<div class="col-md-12">
					<List recipes={this.state.recipes}/>
				</div>
			</div>
		)
	}
}
export default RecipeList
