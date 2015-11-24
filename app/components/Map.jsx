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
		// ComponentHandler.upgradeDom();
	}

	onMapCreated(map) {

	    map.setOptions({
	      disableDefaultUI: true,
	      styles: [{'featureType':'all','elementType':'labels.text.fill','stylers':[{'color':'#ffffff'}]},{'featureType':'all','elementType':'labels.text.stroke','stylers':[{'color':'#000000'},{'lightness':13}]},{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#cacaca'},{'lightness':14},{'weight':1.4}]},{'featureType':'landscape','elementType':'all','stylers':[{'color':'#c70731'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#e10837'},{'lightness':5}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#0b434f'},{'lightness':25}]},{'featureType':'road.arterial','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},{'featureType':'road.arterial','elementType':'geometry.stroke','stylers':[{'color':'#a0a0a0'},{'lightness':16}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#000000'}]},{'featureType':'transit','elementType':'all','stylers':[{'color':'#146474'}]},{'featureType':'water','elementType':'all','stylers':[{'color':'#04143c'}]}]
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