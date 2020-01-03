import React, {useState} from 'react';
import Navbar from 'components/nav/Navbar';
import classes from 'styles/Layout.module.css';
import SideDrawer from 'components/nav/SideDrawer';

export default (props) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(true);
  const closeSideDrawer = () => setSideDrawerOpen(false);
  const openSideDrawer = () => setSideDrawerOpen(true);
	return (
		<>
      <SideDrawer open={sideDrawerOpen} openSideDrawer={openSideDrawer} closeSideDrawer={closeSideDrawer} />
			<Navbar openSideDrawer={openSideDrawer} />
			<main className={classes.Container}>{props.children}</main>
		</>
	);
};
