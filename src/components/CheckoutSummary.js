import React from 'react';
import Modal from './Modal';

export default function CheckoutSummary({ price, ingredients, toggleCheckoutSummary }) {
	const ingredientsKeys = Object.keys(ingredients);
	return (
		<Modal>
			<h3>Your Order</h3>
			<p>Your Delicious Burger with the following ingrediets: </p>
			<ul>
				{ingredientsKeys.map((ingredient) => (
					<li key={ingredient} style={{ textTransform: 'capitalize' }}>
						{ingredient}: {ingredients[ingredient]}
					</li>
				))}
			</ul>
			<p>Price: $ {price}</p>
			<p>Continue to Checkout?</p>
			<button onClick={toggleCheckoutSummary}>Continue</button>
			<button onClick={toggleCheckoutSummary}>Cancel</button>
		</Modal>
	);
}
