import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {

   render() {

   const GoogleMapComponent = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { {lat: 55.7525, lng: 37.6230} }
        defaultZoom = { 16 }
      >
      </GoogleMap>
   ));

   return(
        <GoogleMapComponent
          containerElement={ <div class="map-container" /> }
          mapElement={ <div class="map" /> }
        />
   );

   }
};

export default Map;