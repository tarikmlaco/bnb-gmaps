import React from 'react';
import Place from './Place.jsx';
import PlaceStore from '../stores/PlaceStore';

export default class Places extends React.Component {
	constructor(props) {
		super(props);

		this.renderPlace = this.renderPlace.bind(this);
	}

	render() {
		
		const places = this.props.places;
		console.log('Place rendering called, places:', places.map((place) => place.name ));
		console.log('PlaceStore state:', PlaceStore.getState().places.map((place) => place.name ));

		return <ul className="places">{places.map(this.renderPlace)}</ul>;
	}

	renderPlace(place) {
		
		return <Place key={place.id} place={place}/>;
	}
}