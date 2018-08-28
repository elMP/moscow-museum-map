import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import axios from 'axios';
import './App.css';
import Sidebar from './Sidebar';
import Map from './Map';

class App extends Component {
    state = {
        venues: []
    }

    componentDidMount() {
        this.getVenues()
    }

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
            /* console.log(response.data.response.groups[0].items); */
        })
        .catch(error => {
            console.log("ERROR!! " + error)
        })

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Sidebar />
                    <Map places= {this.state.venues} /> 
                </div>
            </div>
        );
    }
}

export default App;