console.log('react');

// var React = require('react');
import React from 'react'
import ReactDom from 'react-dom'

// class HelloWorld extends React.Component {

//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return <div>hello world</div>
//   }
// }

function HelloWorld(props) {
  return <div>hi {props.firstname}! hello world.</div>
}

// function Slider(props) {
//   return <div>
//     <input type="range" value={props.value}/>
//     <input type="number" value={props.value} /> 
//   </div>
// }

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: 0
    }
  }

  handleChange(event) {
    this.setState({  value: event.target.value })
  }

  render() {
    return <div>
      <input type="range" value={this.state.value} />
      <input 
        type="number" 
        value={this.state.value}
        onChange={this.handleChange} /> 
    </div>
  }
}

function App(props) {
  return <div>
    <h1>my app</h1>
    <Slider />
    <p>this is an awesome app</p>
    <HelloWorld firstname="sam" />
  </div>
}

ReactDom.render( 
  <App /> , 
  document.querySelector('#root') 
)
