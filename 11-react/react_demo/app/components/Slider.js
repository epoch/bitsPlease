import React from 'react'

export default class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: this.props.startValue || 0
    }
  }

  handleChange(event) {
    this.setState({  value: event.target.value })
  }

  render() {
    return <div>
      <input 
        type="range"
        min="0"
        max="5" 
        value={this.state.value} 
        onChange={this.handleChange} />
      <input 
        type="number"
        min="0"
        max="5" 
        value={this.state.value}
        onChange={this.handleChange} /> 
    </div>
  }
}
