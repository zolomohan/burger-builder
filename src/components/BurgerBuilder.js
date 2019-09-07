import React, { Component } from 'react'
import Burger from './Burger';

export default class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 1,
			meat: 1
		}
	}

	render() {
		return (
			<Burger ingredients={this.state.ingredients} />
		)
	}
}
