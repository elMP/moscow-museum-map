import React, { Component } from 'react';

let map;

class Map extends Component {
    componentDidMount() {
        this.initMap();
      }
    
    componentDidUpdate(){
        this.initMap();
    } 

    isEmpty(obj) {
        for (var key in obj) {
          return false;
        }
        return true;
    }

    initMap = () => {
        map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 55.7525, lng: 37.6230},
          zoom: 10
        })

        let infowindow = new window.google.maps.InfoWindow();
        infowindow.addListener("closeclick", () => {               
            infowindow.close();
            this.props.onInfowindowClose();
        })

        this.props.places.forEach((place) => {

            let content = place.venue.name;

            let marker = new window.google.maps.Marker({
              position: {lat: place.venue.location.lat , lng: place.venue.location.lng},
              map: map,
              title: place.venue.name
            })                  
            
            if ( !this.isEmpty(this.props.selected) && (this.props.selected.venue.id === place.venue.id)) {
                marker.setAnimation(window.google.maps.Animation.BOUNCE);
                setTimeout(()=> {
                    marker.setAnimation(null)
                }, 600);

                infowindow.setContent(content);
                infowindow.open(map, marker);
            }

            marker.addListener('click', function() {
                marker.setAnimation(window.google.maps.Animation.BOUNCE);
                setTimeout(()=> {
                    marker.setAnimation(null)
                }, 600);

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