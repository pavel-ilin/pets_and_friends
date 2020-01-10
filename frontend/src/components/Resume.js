import React, { Component } from 'react'

export default class Pause extends Component {
    render() {
        return (
            <button className="pause" onClick={this.props.handleClick}>Resume</button>
        )
    }
}