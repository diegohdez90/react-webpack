import React from 'react';
import List from './components/List';
import Logo from './assets/img/logo.svg';
import Cart from './components/Cart';

const App: React.FC = () => {
	return (<React.Fragment>
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
	</React.Fragment>);
};

export default App;
