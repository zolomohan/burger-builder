import React from 'react';
import classes from 'styles/NavItem.module.css';

export default function NavItem(props ) {
	return (
		<li className={classes.navItem}>
			<a
				href={props.link}
				className={props.active ? classes.active : null}
			>
				{props.children}
			</a>
		</li>
	);
}
