import React from 'react'
import './LikeButton.css'

export default function LikeButton(props) {
  return <div 
    onClick={props.clickHandler} 
    className="like-button">
    Likes {props.count}
  </div>
}