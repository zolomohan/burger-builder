import React from 'react';
import classes from 'styles/Navbar.module.css';
import Logo from 'components/Logo';
import NavItems from 'components/nav/NavItems';

export default function Navbar() {
	return (
		<header className={classes.Navbar}>
			<Logo />
			<nav>
				<NavItems />
			</nav>
		</header>
	);
}
