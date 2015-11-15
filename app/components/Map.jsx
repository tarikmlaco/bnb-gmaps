import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import AltContainer from 'alt-container';
import PlaceStore from '../stores/PlaceStore';

const coords = {
  lat: 43.8568172,
  lng: 18.4028613
};

export default class Map extends React.Component {

	constructor(props){
		super(props);

        this.onMapCreated = this.onMapCreated.bind(this); //not necessary, but maintaining convention
        this.renderMarkers = this.renderMarkers.bind(this);
	}

	onMapCreated(map) {
        // console.log('calling onMapCreated');
	    map.setOptions({
	      disableDefaultUI: true
	    });
	}

    renderMarkers(place) {
        // console.log('Render markers called');
        return <Marker lat={place.lat} lng={place.lng} draggable={false} />;
    }

	render() {
		const places = this.props.places;
        // console.log('map render called, places: ', places.map((place) => place.name));

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