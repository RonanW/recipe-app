"use strict"
import React from "react";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class CookingTimeFilter extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
		  value: this.props.value
		}
	}

	render() {
		return (
				<div class="input-group">
					<span>
						<h5>Cooking time</h5>
						<div className='slider'>
							<Slider
							min={0}
							max={200}
							value={this.props.value}
							onChange={this.props.handleChange}
							onChangeComplete={this.props.handleChangeComplete}
							/>
							<div className='value'>{this.props.value}</div>
						</div>
					</span> 
				</div>
			)
		}
}

export default CookingTimeFilter