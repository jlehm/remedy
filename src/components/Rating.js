import React from 'react'
import Stars from './Stars.js'
import './Rating.css'

const Rating = ({rating}) => {
  return (
    <div className="ratingDiv">
      <span className="rating">{rating}</span>
      <Stars rating={Math.round(rating)} />
    </div>
  )
}

export default Rating
