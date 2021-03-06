import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Sidebar from './Sidebar';
import Map from './Map';

class App extends Component {
    state = {
        venues: [],
        select: {},
        query: ""
    }

    componentDidMount() {
        this.getVenues()
    }

    //get places from foursquare api
    getVenues = () => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"
        const parameters = {
            client_id: "JLXE4BERSSVS2GMNOYSVK0EC2VDYLFAAB0XU0QGZBKTNUPCN",
            client_secret: "JDLWTHW05N4ZKMMAM3ZFU3RUQ3USHJSOZQUIZAUOOQU3FDUV",
            query: "Museum",
            near: "Moscow",
            v: "20182507"
        }
        axios.get(endPoint + new URLSearchParams(parameters))
        .then(response => {
            this.setState({
                venues: response.data.response.groups[0].items
            });
        })
        .catch(error => {
            console.log("ERROR!! " + error);
            alert("Parent server is not available. \nNo data will be shown until it is back online.");
        })

    }

    onSelectMarker = (location) => {
      this.setState({select: location});
  }

    updateQuery = (query) => {
        this.setState({ query })
    }

    onInfowindowClose = () => {
        this.setState({ select: {} })
    }

    //show sidebar with places list
    showMenu = () => {
      document.querySelector('.menu-icon').classList.toggle('open');
      document.querySelector('.sidebar').classList.toggle('open');
    }

    render() {
        //if wa have query - filter places that match query
        let displaylist;
        if (this.state.query) {
            displaylist = this.state.venues.filter(place => place.venue.name.toLowerCase().includes(this.state.query.toLowerCase()));
        }
        else
            displaylist = this.state.venues;

        return (
            <div className="App">
                <nav className="nav">
                      {<div className="menu-icon"
                          aria-label="show places list"
                          tabIndex="0"
                          onClick={() => this.showMenu()}
                          onKeyDown={(e) => {
                            if (e.keyCode === 9) {
                              this.showMenu()
                            }
                          }} >
                          <span></span>
                      </div>}
                      <h1 className="heading">Moscow Museums Map</h1>
                </nav>
                <div className="container" role="main">
                    <Sidebar places={displaylist}  onSelectMarker={this.onSelectMarker} updateQuery={this.updateQuery} searchQuery={this.state.query} />
                    <Map places={displaylist} selected={this.state.select} onInfowindowClose={this.onInfowindowClose}/> 
                </div>
            </div>
        );
    }
}

export default App;