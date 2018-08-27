import React, { Component } from 'react';

class Map extends Component {
    componentDidMount() {
        this.renderMap()
    }
    
    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBX872Y3qubdo3i464VcQzoZUMydJx41Js&callback=initMap")
        window.initMap = this.initMap
    }
    
    
    initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 55.7525, lng: 37.6230},
          zoom: 14
        })
    }
    
    render() {
        return (
            <div className="map-container">
                <div id="map"></div>
            </div>
        )
      }
    }

/*         {this.props.places.map((place, index)  => (
            <Marker key={index}
                position={ place }
           />
 */

function loadScript(url) {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export default Map;