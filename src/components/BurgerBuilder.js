import React, { Component, Fragment } from 'react';
import Burger from './Burger';
import BurgerControl from './BurgerControl';
import { INGREDIENT_PRICES } from '../helpers/constants';
import CheckoutSummary from './CheckoutSummary';
export default class BurgerBuilder extends Component {
	state = {
		price       : 4,
		ingredients : {
			salad  : 0,
			bacon  : 0,
			cheese : 0,
			meat   : 0
		}
	};

	addIngredient = (type) => {
		const ingredients = {
			...this.state.ingredients
		};
		ingredients[type] = this.state.ingredients[type] + 1;
		this.setState({ ingredients, price: this.state.price + INGREDIENT_PRICES[type]});
	};

	removeIngredient = (type) => {
		if (this.state.ingredients[type] > 0) {
			const ingredients = {
				...this.state.ingredients
			};
			ingredients[type] = this.state.ingredients[type] - 1;
			this.setState({ ingredients, price: this.state.price - INGREDIENT_PRICES[type]});
		}
	};

	render() {
		return (
			<Fragment>
				<CheckoutSummary ingredients={this.state.ingredients} />
				<Burger ingredients={this.state.ingredients} />
				<BurgerControl
					price={this.state.price}
					ingredients={this.state.ingredients}
					addIngredient={this.addIngredient}
					removeIngredient={this.removeIngredient}
				/>
			</Fragment>
		);
	}
}
