import React, { Component } from 'react'

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <p>Sidebar</p>
                {this.props.places.map((place, index)  => (
                    <p key={index}
                        onClick={ () => this.props.onSelectMarker(place) }
                    >
                       {place.venue.name}
                    </p>
                ))}
            </div>
        )
    }
}

export default Sidebar;