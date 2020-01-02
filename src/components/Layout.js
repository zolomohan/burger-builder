import React from 'react';
import Navbar from 'components/Navbar';
import classes from 'styles/Layout.module.css';

export default ({ children }) => {
	return (
		<>
			<Navbar />
			<main className={classes.Container}>{children}</main>
		</>
	);
};
