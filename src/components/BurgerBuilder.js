import React, { Component, Fragment } from 'react';
import Burger from './Burger';
import BurgerControl from './BurgerControl';

export default class BurgerBuilder extends Component {
	state = {
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
		this.setState({ ingredients });
	};

	removeIngredient = (type) => {
		const ingredients = {
			...this.state.ingredients
		};
		if(this.state.ingredients[type] > 0){
			ingredients[type] = this.state.ingredients[type] - 1;
			this.setState({ ingredients });
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
