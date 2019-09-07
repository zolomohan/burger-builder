import React from 'react';
import classes from '../styles/BurgerIngredient.module.css';

export default function Ingredient(props) {
	switch (props.type) {
		case 'bread-top':
			return (
				<div className={classes.BreadTop}>
					<div className={classes.Seeds1} />
					<div className={classes.Seeds2} />
				</div>
			);
		case 'bread-bottom':
			return <div className={classes.BreadBottom} />;
		case 'meat':
			return <div className={classes.Meat} />;
		case 'cheese':
			return <div className={classes.Cheese} />;
		case 'salad':
			return <div className={classes.Salad} />;
		case 'bacon':
			return <div className={classes.Bacon} />;
		default:
			return null;
	}
}
