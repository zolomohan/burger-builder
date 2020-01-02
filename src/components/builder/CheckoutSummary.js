import React from 'react';
import Modal from 'components/ui/Modal';
import Button from 'components/ui/Button'

export default function CheckoutSummary({ show, price, ingredients, toggleCheckoutSummary }) {
	const ingredientsKeys = Object.keys(ingredients);
	return (
		<Modal show={show} closeModal={toggleCheckoutSummary}>
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
			<Button onClick={toggleCheckoutSummary} type='Success'>Continue</Button>
			<Button onClick={toggleCheckoutSummary} type='Danger'>Cancel</Button>
		</Modal>
	);
}
