import React from 'react';
import List from './components/List';
import Logo from './assets/img/logo.svg';
import Cart from './components/Cart';
import AppProvider from './context/AppContext';

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
		<List />
	</AppProvider>);
};

export default App;
