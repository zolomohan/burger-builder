import React from 'react';
import IngredientControl from 'components/builder/IngredientControl';
import classes from 'styles/BurgerControl.module.css';
export default function BugerControl(props) {
	const {
		ingredients,
		price,
		addIngredient,
		removeIngredient,
		toggleCheckoutSummary
	} = props;
	return (
		<div className={classes.BurgerControl}>
			<p>
				Price: <strong>$ {price.toFixed(2)}</strong>
			</p>
			{Object.keys(ingredients).map((ingredient, i) => (
				<IngredientControl
					key={ingredient + i}
					name={ingredient}
					removeIngredient={removeIngredient}
					addIngredient={addIngredient}
					disableRemove={ingredients[ingredient] <= 0}
				/>
			))}
			<button
				className={classes.CheckoutButton}
				disabled={
					Object.values(ingredients).reduce(
						(acc, val) => acc + val
					) === 0
				}
				onClick={toggleCheckoutSummary}
			>
				Checkout
			</button>
		</div>
	);
}
