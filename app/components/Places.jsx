import React from 'react';
import Place from './Place.jsx';
import PlaceStore from '../stores/PlaceStore';
import ComponentHandler from '../libs/material';

export default class Places extends React.Component {
	constructor(props) {
		super(props);

		this.renderPlace = this.renderPlace.bind(this);
	}

	componentDidUpdate(){
		ComponentHandler.upgradeDom();
	}

	render() {
		
		const places = this.props.places;
		
		return <ul className="places">{places.map(this.renderPlace)}</ul>;
	}

	renderPlace(place) {
		
		return <Place key={place.id} place={place}/>;
	}
}