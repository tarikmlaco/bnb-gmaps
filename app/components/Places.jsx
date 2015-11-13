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
		return (
			<li className="place" key={place.id}>
				<Place place={place}/>
			</li>
		);
	}
}