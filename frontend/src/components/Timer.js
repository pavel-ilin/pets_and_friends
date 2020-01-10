import React, { Component } from 'react'

export default class Timer extends Component {
    render(){
        return(
            <button className="timer" onClick={this.props.handleClick}>Start Game</button>
        )
    }
}