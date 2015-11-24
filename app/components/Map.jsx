import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import AltContainer from 'alt-container';
import PlaceStore from '../stores/PlaceStore';
import ComponentHandler from '../libs/material';

const coords = {
  lat: 43.8568172,
  lng: 18.4028613
};

export default class Map extends React.Component {

	constructor(props){
		super(props);

        this.onMapCreated = this.onMapCreated.bind(this);
        this.renderMarkers = this.renderMarkers.bind(this);
	}

	componentDidUpdate(){
		ComponentHandler.upgradeDom();
	}

	onMapCreated(map) {

	    map.setOptions({
	      disableDefaultUI: true,
	      styles: [{'featureType':'water','elementType':'geometry','stylers':[{'color':'#193341'}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#2c5a71'}]},{'featureType':'road','elementType':'geometry','stylers':[{'color':'#29768a'},{'lightness':-37}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#406d80'}]},{'featureType':'transit','elementType':'geometry','stylers':[{'color':'#406d80'}]},{'elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#3e606f'},{'weight':2},{'gamma':0.84}]},{'elementType':'labels.text.fill','stylers':[{'color':'#ffffff'}]},{'featureType':'administrative','elementType':'geometry','stylers':[{'weight':0.6},{'color':'#1a3541'}]},{'elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#2c5a71'}]}]
	  });
	}

    renderMarkers(place) {
    	return <Marker lat={place.lat} lng={place.lng} draggable={false} />;
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