import React from 'react';
import classes from 'styles/Navbar.module.css';
import Logo from 'components/Logo';
import NavItems from 'components/nav/NavItems';
import HamburgerMenu from './HamburgerMenu';

export default function Navbar(props) {
	return (
		<header className={classes.Navbar}>
			<div className={classes.Logo}>
				<Logo />
			</div>
			<HamburgerMenu onClick={props.openSideDrawer} />
			<nav className={classes.DesktopOnly}>
				<NavItems />
			</nav>
		</header>
	);
}
