import React from 'react';
import clsx from 'clsx';
import Backdrop from 'components/ui/Backdrop';
import Logo from 'components/Logo';
import NavItems from 'components/nav/NavItems';
import classes from 'styles/SideDrawer.module.css';

export default function SideDrawer(props) {
	return (
		<>
			<Backdrop show={props.open} close={props.closeSideDrawer} />
			<div
				className={clsx(classes.sideDrawer, {
					[classes.open]: props.open,
					[classes.close]: !props.open
				})}
			>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavItems />
				</nav>
			</div>
		</>
	);
}
