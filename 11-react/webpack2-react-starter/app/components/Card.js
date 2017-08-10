import React from 'react'
import './Card.css'

export default function Card(props) {
  return <div className="card">
    <div>
      <img src="http://via.placeholder.com/200x200" />
    </div>
    <h2>{props.user.username}</h2>
    <div>
      <p>{props.user.realName}</p>
    </div>
  </div>
}