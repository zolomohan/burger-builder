import React from 'react';
import classes from 'styles/Navbar.module.css';
import Logo from 'components/Logo';

export default function Navbar() {
	return (
		<header className={classes.Navbar}>
			<Logo />
		</header>
	);
}
