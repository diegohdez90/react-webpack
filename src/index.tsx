import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.scss';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);

root.render(<App />);
