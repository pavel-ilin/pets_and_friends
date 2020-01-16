import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class Login extends Component {

    state = {
        username: "",
        password: "",
        dataLoaded: false,
        errors: []
    }


    onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    submitClick = event => {
      event.preventDefault()
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then(r => r.json())
      .then(resp => {
        if (resp.errors) {
          localStorage.clear()
          this.setState({
            errors: resp.errors,
            username: "",
            password: "",
          })
        } else {
          this.props.setToken(resp)
        }
    })
  }


    render() {
        return (
            <div className="login">

              {this.state.errors.map(error => <p>{ error }</p>)}

                <h2>Login</h2>
                <form>
                    <label>Username: </label>
                    <input onChange={this.onChange} autoComplete="username" name="username" type="text" value={this.state.username}/>
                    <br />
                    <label>Password: </label>
                    <input onChange={this.onChange} autoComplete="password" name="password" type="password" value={this.state.password}/>
                    <br />
                    <button onClick={this.submitClick}>Login</button>
                    {this.state.errors[1] ? < Redirect to='/' /> : null}
                    {this.state.dataLoaded ? < Redirect to='/dashboard' /> : null }
                </form>
            </div>
        )
    }
}