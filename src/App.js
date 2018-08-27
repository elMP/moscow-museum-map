import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Sidebar from './Sidebar';
import Map from './Map';

class App extends Component {
    state = {
        places : [{lat: 55.7523, lng: 37.6259},
                  {lat: 55.750129, lng: 37.628689}]
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Sidebar />
                    <Map places= {this.state.places} /> 
                </div>
            </div>
        );
    }
}

export default App;