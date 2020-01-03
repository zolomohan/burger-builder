import React from 'react';
import Hamburger from 'styles/Hamburger.module.css';

export default function HamburgerMenu(props) {
	return (
		<div onClick={props.onClick} className={Hamburger.Container}>
			<span />
			<span />
			<span />
		</div>
	);
}
