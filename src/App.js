import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Sidebar from './Sidebar';
import Map from './Map';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div class="container">
                    <Sidebar />
                    <Map /> 
                </div>
            </div>
        );
    }
}

export default App;
