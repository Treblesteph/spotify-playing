import React from 'react'

const Spotify = props => {
  return (
    <div>
      <h1>You are listening to {props.song}, by {props.artist}</h1>
      <img src={props.imageUrl} alt='album artwork' width='200px'/>
    </div>
  )
}

export default Spotify