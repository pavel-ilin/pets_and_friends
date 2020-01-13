import React, { Component } from 'react'
import Dashboard from './Dashboard'
import Welcome from './Welcome'
import { Route, Switch, Redirect } from 'react-router-dom'


export default class App extends Component {

    state = {
        token: localStorage.token,
        loggedInUserId: localStorage.userId
    }


    setToken = event => {
      localStorage.token = event.token
      localStorage.userId = event.user_id

      this.setState({
        token: event.token,
        loggedInUserId: event.user_id
      })
    }

    logOutClick = () => {
      localStorage.clear()

      this.setState({
        loggedInUserId: null,
        token: null
      })
    }

    render(){
        return(
            <div>

            <Switch>
              <Route path="/welcome" render={ (props) => <Welcome {...props} setToken={this.setToken}/> } />
              <Route path="/dashboard" render={ (props) =>  <Dashboard {...props} userID={this.state.loggedInUserId} logOutClick={this.logOutClick}/> } />
              <Route exact path='/' render = { () => <Redirect to="/welcome" /> } />
            </Switch>

            {this.state.token ? <Redirect to="/dashboard" /> : <Redirect to="/welcome" />}

            </div>
        )
    }
}

// {!!this.state.token ? (<Dashboard userID={this.state.loggedInUserId} logOutClick={this.logOutClick}/>) : (<Welcome setToken={this.setToken}/> )}
