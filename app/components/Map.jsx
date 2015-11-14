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
    window.mymap = new google.maps.Map(document.getElementById('map'), mapOptions);
    // ReactScriptLoader.triggerOnScriptLoaded(scriptURL);
}

class Map extends React.Component {
    // mixins: [ReactScriptLoaderMixin]

    constructor(props){
        super(props);
    }

    render() {

        const places = this.props.places;

        if(window.google){

            
            for(var i=0; i<places.length; i++){
                var marker = new window.google.maps.Marker({
                                        map: window.mymap,
                                        position: new google.maps.LatLng(places[i].lat, places[i].lng),
                                        title: 'Marker!'
                });
            }
        };


        return <h6>DummyComponent</h6>;
    }

};

export default Map;