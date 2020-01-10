import React, { Component } from 'react'

export default class Save extends Component {
    render() {
        return (
            <button className="save" onClick={this.props.handleClick}>Save</button>
        )
    }
}