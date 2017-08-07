console.log('react');

// var React = require('react');
import React from 'react'
import ReactDom from 'react-dom'
import Slider from './components/Slider'
import HelloWorld from './components/HelloWorld'
import PasswordInput from './components/PasswordInput'

function App(props) {
  return <div>
    <h1>my app</h1>
    <Slider startValue="3" />
    <p>this is an awesome app</p>
    <HelloWorld firstname="sam" />
    <Slider />
    <PasswordInput />
  </div>
}

ReactDom.render( 
  <App /> , 
  document.querySelector('#root') 
)
