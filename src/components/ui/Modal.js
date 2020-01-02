import React, { Fragment } from 'react';
import classes from 'styles/Modal.module.css';
import Backdrop from 'components/ui/Backdrop';

export default function Modal({ children, show, closeModal }) {
	return (
		<Fragment>
			<Backdrop show={show} closeModal={closeModal}/>
			<div className={classes.Modal}>{children}</div>
		</Fragment>
	);
}
