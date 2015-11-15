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
	// const script = document.createElement('script');
	// script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&callback=initializeMaps";
	// script.type = "text/javascript";
	document.body.appendChild(app);
	
	ReactDOM.render(<App />, app);
}
