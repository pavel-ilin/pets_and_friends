import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {

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

  loginAction = () => {
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
      console.log(resp)
      if (resp.errors) {
        this.setState({
          errors: [...this.state.errors, resp.errors],
          username: "",
          password: ""
        })
      } else {
        this.props.setToken(resp)
      }
  })
  }

  submitClick = event => {
    event.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user:{
        username: this.state.username,
        password: this.state.password
      }
      })
    })
    .then(r => r.json())
    .then(resp => {
        if (resp.errors) {
        this.setState({
          errors: [...this.state.errors, resp.errors],
          username: "",
          password: ""
        })
      } else {
        this.setState({
          dataLoaded: !this.state.dataLoaded
        })
      }
  })
}


  render() {
      return (
          <div className="login">

            {this.state.errors.map(error => <p>{ error }</p>)}
              <h2>Signup</h2>
              <form>
                  <label>Username: </label>
                  <input onChange={this.onChange} autoComplete="username" name="username" type="text"/>
                  <br />
                  <label>Password: </label>
                  <input onChange={this.onChange} autoComplete="password" name="password" type="password"/>
                  <br />
                  <button onClick={this.submitClick}>  {!this.state.dataLoaded ? <Link to='/welcome'>Submit</Link> : this.loginAction()}</button>

              </form>
          </div>
      )
  }

}

export default Signup