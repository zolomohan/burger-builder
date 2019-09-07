import React from 'react'
import classes from '../styles/IngredientControl.module.css';

export default function IngredientControl({name,disableRemove, addIngredient, removeIngredient}) {
	return (
		<div className={classes.IngredientControl}>
			<span className={classes.Label}>{name}</span>
			<button className={classes.More} onClick={() => addIngredient(name)}>More</button>
			<button className={classes.Less} disabled={disableRemove} onClick={() => removeIngredient(name)}>Less</button>
		</div>
	)
}
