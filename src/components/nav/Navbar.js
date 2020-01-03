import React from 'react';
import classes from 'styles/Navbar.module.css';
import Logo from 'components/Logo';
import NavItems from 'components/nav/NavItems';
import Hamburger from 'styles/Hamburger.module.css';

export default function Navbar(props) {
	return (
		<header className={classes.Navbar}>
			<div className={classes.Logo}>
				<Logo />
			</div>
			<div onClick={props.openSideDrawer} className={Hamburger.Container}>
				<span />
				<span />
				<span />
			</div>
			<nav className={classes.DesktopOnly}>
				<NavItems />
			</nav>
		</header>
	);
}
