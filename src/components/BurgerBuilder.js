import React, { Component, Fragment } from 'react';
import Burger from './Burger';
import BurgerControl from './BurgerControl';

export default class BurgerBuilder extends Component {
	state = {
		ingredients : {
			salad  : 0,
			bacon  : 0,
			cheese : 1,
			meat   : 1
		}
	};

	render() {
		return (
			<Fragment>
				<Burger ingredients={this.state.ingredients} />
				<BurgerControl ingredients={Object.keys(this.state.ingredients)}/>
			</Fragment>
		);
	}
}
