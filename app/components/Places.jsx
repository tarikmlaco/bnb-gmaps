import React from 'react';
import Place from './Place.jsx';

export default class Places extends React.Component {
	constructor(props) {
		super(props);

		this.renderPlace = this.renderPlace.bind(this);
	}

	render() {
		const places = this.props.places;

		return <ul className="places">{places.map(this.renderPlace)}</ul>;
	}

	renderPlace(place) {
		
		return <Place key={place.id} place={place}/>;
	}
}