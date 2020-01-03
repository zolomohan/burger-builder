import React from 'react'
import classes from 'styles/Backdrop.module.css'

export default function Backdrop(props) {
	return props.show ? <div className={classes.Backdrop} onClick={props.close}></div> : null;
}
