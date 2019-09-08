import React from 'react';
import burgerLogo from '../assets/BurgerLogo.png';
import classes from '../styles/Logo.module.css'
export default function Logo() {
	return (
		<div className={classes.Logo}>
			<img src={burgerLogo} />
		</div>
	);
}
