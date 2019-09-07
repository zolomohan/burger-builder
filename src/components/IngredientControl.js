import React from 'react'
import classes from '../styles/IngredientControl.module.css';

export default function IngredientControl({name}) {
	return (
		<div className={classes.IngredientControl}>
			<span className={classes.Label}>{name}</span>
			<button className={classes.More}>More</button>
			<button className={classes.Less}>Less</button>
		</div>
	)
}
