import React from 'react'
import StarSVG from './StarSVG.js'

const Stars = ({rating}) => {
  let stars = []
  for(let i=0; i<rating; i++) {
    stars.push(<StarSVG key={`star${i}`} />)
  }
  return (<span>{stars}</span>)
}

export default Stars
