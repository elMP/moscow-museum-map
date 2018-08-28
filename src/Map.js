import React, { Component } from 'react';

let map;

class Map extends Component {
    componentDidMount() {
        this.initMap();
      }
    
    componentDidUpdate(){
        this.initMap();
    } 

    //check if object is empty
    isEmpty(obj) {
        for (var key in obj) {
          return false;
        }
        return true;
    }

    initMap = () => {
        //create map
        map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 55.7525, lng: 37.6230},
          zoom: 10
        });

        //create one infowindow
        let infowindow = new window.google.maps.InfoWindow();
        infowindow.addListener("closeclick", () => {               
            infowindow.close();
            this.props.onInfowindowClose();
        })

        //crete markers for all places that we have in this.props.places
        this.props.places.forEach((place) => {
            //content for infowindow
            let content = `<h3>${place.venue.name.replace(' ', '<br>')}</h3>
            <p style="text-align:left">${place.venue.categories[0].name}</p>
            <address>${place.venue.location.address}</address>
            <br><br>
            <p style="text-align:right">Data was provided by <a href="https://foursquare.com/" target="_blank">Foursquare</a></p>
            `;

            //add marker on map
            let marker = new window.google.maps.Marker({
              position: {lat: place.venue.location.lat , lng: place.venue.location.lng},
              map: map,
              title: place.venue.name
            })                  
            
            //if we have selected marker - show infowindow for it
            if ( !this.isEmpty(this.props.selected) && (this.props.selected.venue.id === place.venue.id)) {
                marker.setAnimation(window.google.maps.Animation.BOUNCE);
                setTimeout(()=> {
                    marker.setAnimation(null)
                }, 600);

                infowindow.setContent(content);
                infowindow.open(map, marker);
            }

            //show infowindow after click on marker
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
                <div id="map" role="application" aria-label="Map with museums labels">
                </div>
            </div>
        )
      }
    }

export default Map;