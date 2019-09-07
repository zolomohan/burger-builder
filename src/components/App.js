import React from 'react';
import Layout from './Layout';
import BurgerBuilder from '../components/BurgerBuilder';

function App() {
  return (
		<Layout>
			<h1>Burger Builder</h1>
			<BurgerBuilder />
		</Layout>
	) 
}

export default App;
