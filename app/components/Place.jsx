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
			<h4>{place.name}</h4>
			<h5>{place.description}</h5>
		</div>
		);
	}
}
