// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onClickLogin = async event => {
    event.preventDefault()
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken !== undefined) {
      return <Redirect to="/"/>
    }
    return (
      <div className="login-container">
        <h1 className="login-heading">Please Login</h1>
        <button className="login-button" onClick={this.onClickLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
