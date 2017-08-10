import React from 'react'
import PasswordInput from './PasswordInput'
import Card from './Card'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      input: '',
      user: {
        username: 'abcdefg',
        realName: ''
      }
    }
  }

  fetchUser(username) {
    const url = `https://api.github.com/users/${username}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => {

        this.setState({
          user: {
            username: data.login,
            realName: data.name
          }
        })

      })
  }

  componentDidMount() {
  }

  handleClick() {
    this.fetchUser(this.state.input)
  }

  handleInputChange(event) {
    this.setState({ ipnut: event.target.value })
  }

  render() {
    // const user = this.state.user;
    return <div>
      <input onChange={this.handleInputChange} />
      <button onClick={this.handleClick}>search user</button>
      <Card user={this.state.user} />
    </div>
  }

}

module.exports = App