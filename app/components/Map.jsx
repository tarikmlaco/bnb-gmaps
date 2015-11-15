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
	}

	onMapCreated(map) {
	    map.setOptions({
	      disableDefaultUI: true
	    });
	}

	render() {
		const places = this.props.places;
        // {places.map(this.renderMarkers)}


		return (
		  <Gmaps
		    className="map-canvas"
		    lat={coords.lat}
		    lng={coords.lng}
		    zoom={10}
		    params={{v: '3.exp'}}
		    onMapCreated={this.onMapCreated}>
            <AltContainer stores={[PlaceStore]} inject={{places: (props) => {return PlaceStore.getState().places || []; }}}>
                <Markers />
            </AltContainer>
		  </Gmaps>
		);
	}

}

class Markers extends React.Component {

    constructor(props){
        super(props);

        this.renderMarkers = this.renderMarkers.bind(this);
    }

    renderMarkers(place) {
        console.log('Render markers called');
        return <Marker lat={place.lat} lng={place.lng} draggable={false} key={place.id} />;
    }

    render() {

        const places = this.props.places;
        console.log('Render method in Markers called');

        return <ol>{places.map(this.renderMarkers)}</ol>;
    }

}