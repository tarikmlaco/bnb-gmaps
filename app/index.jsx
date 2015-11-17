// import '../node_modules/material-design-lite/dist/material.css';
import 'material-design-lite/src/material-design-lite.scss';
import './main.css';
// import 'https://storage.googleapis.com/code.getmdl.io/1.0.0/material.grey-blue.min.css';
// import '../node_modules/material-design-lite/dist/material.grey-blue.min.css';
import 'array.prototype.findindex';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

// /node_modules/material-design-lite/src

main();

function main() {
	
	persist(alt, storage, 'app');


	const app = document.createElement('div');

	const font = document.createElement('link');
	font.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700';
	font.ref = 'stylesheet' ;
	font.type='text/css';

	const mdlcss = document.createElement('link');
	mdlcss.href = 'https://storage.googleapis.com/code.getmdl.io/1.0.0/material.grey-blue.min.css';
	mdlcss.ref = 'stylesheet' ;
	mdlcss.type='text/css';

	// const mdljs = document.createElement('script');
	// mdljs.src = 'https://storage.googleapis.com/code.getmdl.io/1.0.0/material.min.js';

	// const script = document.createElement('script');
	// script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&callback=initializeMaps";
	// script.type = "text/javascript";
	document.body.appendChild(font);
	document.body.appendChild(mdlcss);
	// document.body.appendChild(mdljs);
	document.body.appendChild(app);
	
	ReactDOM.render(<App />, app);
}
