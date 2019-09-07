import React from 'react';
import IngredientControl from './IngredientControl';
import classes from '../styles/BurgerControl.module.css';
export default function BugerControl({ ingredients, addIngredient, removeIngredient }) {
	return (
		<div className={classes.BurgerControl}>
			{Object.keys(ingredients).map((ingredient, i) => (
				<IngredientControl
					key={ingredient + i}
					name={ingredient}
					removeIngredient={removeIngredient}
					addIngredient={addIngredient}
					disableRemove={ingredients[ingredient] <= 0}
				/>
			))}
		</div>
	);
}
