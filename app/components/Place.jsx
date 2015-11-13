import React from 'react';

export default class Place extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {

		//Note to self: state must be immutable, use const

		const props = this.props;

		return (
		<div className="place">
			<h3>{this.props.place.name}</h3>
			<h5>{this.props.place.description}</h5>
		</div>
		);
	}
}
