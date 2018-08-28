import React, { Component } from 'react';

let map;

class Map extends Component {
    componentDidMount() {
        this.initMap();
      }
    
    componentDidUpdate(){
        this.initMap();
    } 

    initMap = () => {
        map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 55.7525, lng: 37.6230},
          zoom: 10
        })

        let infowindow = new window.google.maps.InfoWindow();

        this.props.places.map((place) => {

            let content = place.venue.name;

            let marker = new window.google.maps.Marker({
              position: {lat: place.venue.location.lat , lng: place.venue.location.lng},
              map: map,
              title: place.venue.name
            })        
          
            marker.addListener('click', function() {
                infowindow.setContent(content);
                infowindow.open(map, marker);
            }) 
        });
    }
    
    render() {        
        return (
            <div className="map-container">
                <div id="map">
                </div>
            </div>
        )
      }
    }

export default Map;