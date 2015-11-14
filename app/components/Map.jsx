import React from 'react';
// import { ReactScriptLoader, ReactScriptLoaderMixin } from 'react-script-loader';

// var ReactScriptLoaderMixin= ReactScriptLoaderModule.ReactScriptLoaderMixin;
// var ReactScriptLoader= ReactScriptLoaderModule.ReactScriptLoader;

// This function is called by the Google maps API after its initialization is
// complete.
// We need to define this function in the window scope to make it accessible
// to the Google maps script.


window.initializeMaps = function() {

    // This triggers the onScriptLoaded method call on all mounted Map components.
    console.log('initializeMaps');

    // const google = window.google;

    const center = new google.maps.LatLng(41, 33);
        const mapOptions = {
            zoom: 12,
            center: center,
            disableDefaultUI: true,
            draggable: true,
            zoomControl: true,
            scrollwheel: false,
            disableDoubleClickZoom: true,
          };
    const map = new google.maps.Map(document.getElementsByClassName('map-canvas')[0], mapOptions);
    // ReactScriptLoader.triggerOnScriptLoaded(scriptURL);
}

class Map extends React.Component {
    // mixins: [ReactScriptLoaderMixin]

    getScriptURL() {
        console.log('getScriptURL');
        return scriptURL;
    }

    // Ensure that onScriptLoaded is deferred until the
    // ReactScriptLoader.triggerOnScriptLoaded() call above is made in
    // initializeMaps().
    deferOnScriptLoaded() {
        console.log('deferOnScriptLoaded');
        return true;
    }

    onScriptLoaded() {
        console.log('onScriptLoaded');
        // Render a map with the center point given by the component's lat and lng
        // properties.
        const center = new google.maps.LatLng(this.props.lat, this.props.lng);
        const mapOptions = {
            zoom: 12,
            center: center,
            disableDefaultUI: true,
            draggable: false,
            zoomControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true,
          };
        const map = new google.maps.Map(this.getDOMNode(), mapOptions);
    }

    onScriptError() {
        console.log('onScriptError');
        // Show the user an error message.
    }

    render() {
        return <div className="map-canvas"/>;
    }

};

export default Map;