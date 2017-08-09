import React from 'react'
import Slider from './Slider'
import TweetBox from './TweetBox'
import HelloWorld from './HelloWorld'
import PasswordInput from './PasswordInput'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import LikeButton from './LikeButton'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.onLikeButtonClick = this.onLikeButtonClick.bind(this)
    this.state = {
      likesCount: 0,
      colors: ['red','green','blue'] // -> <li>red</li><li>green</li><li>blue</li>
    }
  } 

  onLikeButtonClick() {
    this.setState({ 
      likesCount: (this.state.likesCount + 1)
    })
  }

  render() {
    const { likesCount, colors } = this.state
    return <div>
      <h1>react components demo</h1>

      <LikeButton 
        clickHandler={this.onLikeButtonClick} 
        count={likesCount} />

      <ColorList colors={colors} />
    </div>    
  }
}