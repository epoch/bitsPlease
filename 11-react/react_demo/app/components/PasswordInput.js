import React from 'react'

export default class PasswordInput extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      password: ''
    }
  }

  calculateStrength(password) {
    if (password.length > 6) {
      return 'weak'
    } else {
      return 'worst'
    }
  }

  handleChange(event) {
    // this keyword is modified to point to something else
    this.setState({ password: event.target.value }) 
  }

  render() {
    const strength = this.calculateStrength(this.state.password);

    return <div>
      <input type="password" onChange={this.handleChange} />
      <span className="weak">{strength}</span>
    </div>
  }

}