import React, { Component, Fragment } from 'react';
import Burger from './Burger';
import BurgerControl from './BurgerControl';
import { INGREDIENT_PRICES } from '../helpers/constants';

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
		this.setState({ ingredients, price: Math.round((this.state.price + INGREDIENT_PRICES[type]) * 10) / 10  });
	};

	removeIngredient = (type) => {
		if (this.state.ingredients[type] > 0) {
			const ingredients = {
				...this.state.ingredients
			};
			ingredients[type] = this.state.ingredients[type] - 1;
			this.setState({ ingredients, price: Math.round((this.state.price - INGREDIENT_PRICES[type]) * 10) / 10 });
		}
	};

	render() {
		return (
			<Fragment>
				<Burger ingredients={this.state.ingredients} />
				<BurgerControl
					ingredients={Object.keys(this.state.ingredients)}
					addIngredient={this.addIngredient}
					removeIngredient={this.removeIngredient}
				/>
			</Fragment>
		);
	}
}
