import React from 'react';


const App: React.FC = () => {
	(window as any).hello();
	return (<div>Hello React Application</div>);
};

export default App;
