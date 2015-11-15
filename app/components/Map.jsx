import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 43.8568172,
  lng: 18.4028613
};

export default class Map extends React.Component {
	constructor(props){
		super(props);

		this.renderMarkers = this.renderMarkers.bind(this);
	}

	onMapCreated(map) {
	    map.setOptions({
	      disableDefaultUI: true
	    });
	}

	onDragEnd(e) {
	console.log('onDragEnd', e);
	}

	onCloseClick() {
	console.log('onCloseClick');
	}

	onClick(e) {
	console.log('onClick', e);
	}

	renderMarkers(place){
		return <Marker lat={place.lat} lng={place.lng} draggable={false} key={place.id} />;
	}

	render() {
		const places = this.props.places;

		return (
		  <Gmaps
		    className="map-canvas"
		    lat={coords.lat}
		    lng={coords.lng}
		    zoom={10}
		    params={{v: '3.exp'}}
		    onMapCreated={this.onMapCreated}>
		    {places.map(this.renderMarkers)}
		  </Gmaps>
		);
	}

}