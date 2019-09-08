import React, { Fragment } from 'react';
import Navbar from './Navbar';
import classes from '../styles/Layout.module.css';

export default ({ children }) => {
	return (
		<Fragment>
			<Navbar />
			<main className={classes.Container}>{children}</main>
		</Fragment>
	);
};
