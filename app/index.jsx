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

main();

function main() {
	const app = document.createElement('div');
	document.body.appendChild(app);
	
	ReactDOM.render(<App />, app);
}
