import React from 'react';
import ComponentHandler from '../libs/material';

export default class Place extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate(){
		// ComponentHandler.upgradeDom();
	}


	render() {

		const place = this.props.place;

		return (
		<div className="filters">
			<h3>{place.name}</h3>
			<h5>{place.description}</h5>
		</div>
		);
	}
}
