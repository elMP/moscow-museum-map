import React, { Component } from 'react'

class Sidebar extends Component {

    render() {
        /* console.log(this.props.searchQuery); */
        return (            
            <div className="sidebar">
                <div>
                    <input className="search"
                        role="search"
                        aria-label="search for coffee places"
                        type="text"
                        placeholder="Search.."
                        value={this.props.searchQuery}
                        onChange={(event) => this.props.updateQuery(event.target.value)}
                    />
                </div>
                <div className="places">
                    {this.props.places.map((place, index)  => (
                        <p className="place" 
                            key={index}
                            onClick={ () => this.props.onSelectMarker(place) }
                        >
                        {place.venue.name}
                        </p>
                    ))}
                </div>
            </div>
        )
    }
}

export default Sidebar;