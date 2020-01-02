import React, { Component, Fragment } from 'react';
import Burger from 'components/builder/Burger';
import BurgerControl from 'components/builder/BurgerControl';
import { INGREDIENT_PRICES } from 'helpers/constants';
import CheckoutSummary from 'components/builder/CheckoutSummary';
export default class BurgerBuilder extends Component {
	state = {
		price           : 4,
		checkoutSummary : false,
		ingredients     : {
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
		this.setState({ ingredients, price: this.state.price + INGREDIENT_PRICES[type] });
	};

	removeIngredient = (type) => {
		if (this.state.ingredients[type] > 0) {
			const ingredients = {
				...this.state.ingredients
			};
			ingredients[type] = this.state.ingredients[type] - 1;
			this.setState({ ingredients, price: this.state.price - INGREDIENT_PRICES[type] });
		}
	};

	toggleCheckoutSummary = () =>
		this.setState((state) => ({ checkoutSummary: !state.checkoutSummary }));

	render() {
		return (
			<Fragment>
				{this.state.checkoutSummary && (
					<CheckoutSummary
						show={this.state.checkoutSummary}
						price={this.state.price}
						ingredients={this.state.ingredients}
						toggleCheckoutSummary={this.toggleCheckoutSummary}
					/>
				)}
				<Burger ingredients={this.state.ingredients} />
				<BurgerControl
					price={this.state.price}
					toggleCheckoutSummary={this.toggleCheckoutSummary}
					ingredients={this.state.ingredients}
					addIngredient={this.addIngredient}
					removeIngredient={this.removeIngredient}
				/>
			</Fragment>
		);
	}
}
