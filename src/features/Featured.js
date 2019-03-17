import React from 'react'
import './Featured.css'
import BG from './../assets/images/bg.jpg'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredHeader">Featured</div>
      <img className="featuredImage" src={BG} alt="advertisement"></img>
      <div className="advertisementTag">Advertisement</div>
    </div>
  )
}

export default Featured
