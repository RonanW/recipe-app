"use strict"
import React from "react"
import { Link } from 'react-router-dom'


class List extends React.Component {
	render() {
		const list = this.props.recipes.map((item) => 

		<Link to={`/recipe${item._id}`} key={item._id}>
			<div class="row">
				<div class="col-md-4">
			 		<img src={item.imageURL} height="200"/>
				</div>
				<div class="col-md-8">
					{item.name}
				</div>
			</div>
		</Link>)

		return <div>{list}</div>
	}
}

export default List;