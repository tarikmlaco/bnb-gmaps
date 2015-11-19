import 'material-design-lite/src/material-design-lite.scss';
import './main.css';
import 'array.prototype.findindex';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

main();

function main() {
	
	persist(alt, storage, 'app');


	const app = document.createElement('div');

	const font = document.createElement('link');
	font.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700';
	font.ref = 'stylesheet' ;
	font.type='text/css';

	document.body.appendChild(font);
	document.body.appendChild(app);
	
	ReactDOM.render(<App />, app);
}
