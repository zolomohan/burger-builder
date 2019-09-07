import React from 'react';
import Ingredient from './Ingredient';
import classes from '../styles/Burger.module.css';

export default function Burger() {
	return (
		<div className={classes.Burger}>
			<Ingredient type='bread-top' />
				<Ingredient type='cheese' />
				<Ingredient type='meat' />
			<Ingredient type='bread-bottom'/>
		</div>
	);
}
