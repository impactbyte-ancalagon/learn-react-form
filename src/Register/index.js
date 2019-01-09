import React, { Component } from "react"

class Register extends Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      result: ""
    }
  }

  handleEmailInput = event => {
    this.setState({ email: event.target.value })
  }

  handlePasswordInput = event => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const result = `${this.state.email} ${this.state.password}`
    this.setState({ result: result })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Register</h3>
        <label htmlFor="email">Email:</label>
        <input type="email" onChange={this.handleEmailInput} />
        <label htmlFor="password">Password:</label>
        <input type="password" onChange={this.handlePasswordInput} />
        <input type="submit" value="Register" />

        <p>{this.state.result}</p>
      </form>
    )
  }
}

export default Register
