import React from 'react';
import List from './components/List';
import Logo from './assets/img/logo.svg';
import Cart from './components/Cart';
import AppProvider from './context/AppContext';
import SpecialOffer from './components/SpecialOffer';

import pizzas from './data/pizzas.json';

const App: React.FC = () => {
	return (<AppProvider>
		<div className="text-center">
			<picture>
				<Logo />
			</picture>
		</div>
		<h2 className="text-center">Hello React Application</h2>
		<div className="row">
			<div className="col text-center">
				<Cart />
			</div>
		</div>
		<SpecialOffer pizza={pizzas[1]} />
		<List pizzas={pizzas} />
	</AppProvider>);
};

export default App;
