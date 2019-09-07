import React from 'react';
import Ingredient from './Ingredient';
import classes from '../styles/Burger.module.css';

export default function Burger({ ingredients }) {
	let displayIngredients = Object.keys(ingredients).map((ingredient) =>
		[ ...Array(ingredients[ingredient]) ].map((_, i) => (
			<Ingredient key={ingredient + i} type={ingredient} />
		))
	);

	if (displayIngredients.flat().length === 0)
		displayIngredients = <p>Start Building Your Burger!</p>;

	return (
		<div className={classes.Burger}>
			<Ingredient type='bread-top' />
			{displayIngredients}
			<Ingredient type='bread-bottom' />
		</div>
	);
}
