import React, { Component } from 'react'

export default class Stats extends Component {

    render(){
        return(
            <div className="stats">
                <h1>Stats</h1>
                <h2>Hunger: {this.props.hunger}</h2>
                <h2>Social: {this.props.social} </h2>
                <h2>Fun: {this.props.fun}</h2>
                <h2>Hygiene: {this.props.hygiene}</h2>
            </div>
        )
    }
}