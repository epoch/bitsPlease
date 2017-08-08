import React from 'react'
import './TweetBox.css'

export default class TweetBox extends React.Component {
  constructor(props) {
    super(props)
    this.onTextAreaChange = this.onTextAreaChange.bind(this)
    this.state = {
      content: ''
    }
  }

  onTextAreaChange(event) {
    this.setState({ 
      content: event.target.value
    })
  }

  render() {
    return <div>
      <textarea onChange={this.onTextAreaChange}></textarea>
      <button disabled={this.state.content.length <= 0}>tweet</button>
      <span>140</span>
    </div>
  }
}

