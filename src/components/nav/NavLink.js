import React from 'react';
import clsx from 'clsx';
import classes from 'styles/NavLink.module.css';

export default function NavItem(props) {
	return (
		<li className={classes.navLink}>
			<a href={props.link} className={clsx({ [classes.active]: props.active })}>
				{props.children}
			</a>
		</li>
	);
}
