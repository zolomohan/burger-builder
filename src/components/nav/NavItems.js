import React from 'react'
import NavItem from 'components/nav/NavItem';
import classes from 'styles/NavItems.module.css';

export default function NavItems() {
  return (
    <ul className={classes.navItems}>
      <NavItem link="/" active>Burger Builder</NavItem>
      <NavItem link="/">Checkout</NavItem>
    </ul>
  )
}
