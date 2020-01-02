import React from 'react';
import classes from 'styles/Button.module.css';

export default function Button({ children, onClick, type }) {
	return <button onClick={onClick} className={[classes.Button, classes[type]].join(' ')}>{children}</button>;
}
