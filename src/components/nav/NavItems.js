import React from 'react';
import NavLink from 'components/nav/NavLink';
import classes from 'styles/NavItems.module.css';

export default function NavItems() {
	return (
		<ul className={classes.navItems}>
			<NavLink link='/' active>
				Burger Builder
			</NavLink>
			<NavLink link='/'>Checkout</NavLink>
		</ul>
	);
}
