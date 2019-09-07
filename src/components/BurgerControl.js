import React from 'react';
import IngredientControl from './IngredientControl';
import classes from '../styles/BurgerControl.module.css';
export default function BugerControl({ ingredients, addIngredient, removeIngredient }) {
	return (
		<div className={classes.BurgerControl}>
			{ingredients.map((ingredient, i) => (
				<IngredientControl
					key={ingredient + i}
					name={ingredient}
					removeIngredient={removeIngredient}
					addIngredient={addIngredient}
				/>
			))}
		</div>
	);
}
