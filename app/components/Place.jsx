import React from 'react';

export default class Place extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {

		//Note to self: state must be immutable, use const

		const place = this.props.place;

		return (
		<div className="place">
			<h3>{place.name}</h3>
			<h5>{place.description}</h5>
		</div>
		);
	}
}
