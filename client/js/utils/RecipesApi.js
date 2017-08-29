import React from "react";
import axios from 'axios';
import dispatcher from "../dispatcher";

class RecipesApi extends React.Component {
	static getAll() {
		return axios.get('http://localhost:8080/api/recipes').then((res) => {
			return res.data;
		})
	}
	
	static getById(id) {
		return axios.get(`http://localhost:8080/api/recipe/${id}`).then((res) => {
			return res.data[0];
			})
	}	

	static search(query) {
		const config = {
			params: {
				filter: query.filter,
				value: query.value
			}
		}
		return axios.get('http://localhost:8080/api/recipes/search', config).then((res) => {
			return res.data;
			})
	}
}

export default RecipesApi;