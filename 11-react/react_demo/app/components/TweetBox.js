import React from 'react'
import './TweetBox.css'

export default class TweetBox extends React.Component {
  constructor(props) {
    super(props)
    this.onTextAreaChange = this.onTextAreaChange.bind(this)
    this.state = {
      content: '',
      maxTweetLength: this.props.maxTweetLength || 140
    }
  }

  onTextAreaChange(event) {
    this.setState({ 
      content: event.target.value
    })
  }

  render() {
    // var maxTweetLength = this.state.maxTweetLength;
    // var content = this.state.content;
    var { maxTweetLength, content } = this.state // destructuring
    var isDisabled = content.length <= 0 || content.length > maxTweetLength
    var spanClass = (maxTweetLength - content.length) < 20 ? 'warning' : ''

    return <div>
      <textarea onChange={this.onTextAreaChange}></textarea>
      <button disabled={isDisabled}>tweet</button>
      <span className={spanClass}>
        {maxTweetLength - content.length}
      </span>
    </div>
  }
}

