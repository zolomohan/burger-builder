import React, { Fragment } from 'react';
import Ingredient from './Ingredient';

export default function Burger() {
	return (
		<Fragment>
			<Ingredient type='bread-top' />
			<Ingredient />
		</Fragment>
	);
}
