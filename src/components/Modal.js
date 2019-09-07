import React from 'react';
import classes from '../styles/Modal.module.css';

export default function Modal({ children }) {
	return <div className={classes.Modal}>{children}</div>;
}
