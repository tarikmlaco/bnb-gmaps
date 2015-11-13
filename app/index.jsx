/* require('./main.css');
var component = require('./component');
var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());

*/

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
	const script = document.createElement('script');
	script.src = 'http://maps.googleapis.com/maps/api/js?key=&sensor=false&extension=.js';
	document.body.appendChild(app);
	document.body.appendChild(script);
	
	ReactDOM.render(<App />, app);
}
