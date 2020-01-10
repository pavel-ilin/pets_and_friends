import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

    render(){
        return(
            <div className="navbar">
                <h1>Welcome, {this.props.username}</h1>
                <button onClick={this.props.onClick}><Link to='/welcome'>Logout</Link></button>
            </div>

        )
    }
}