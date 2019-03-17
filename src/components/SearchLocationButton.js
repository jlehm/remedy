import React from 'react'
import './SearchLocationButton.css'

import LocationPinSVG from './../components/LocationPinSVG.js'


const SearchLocationButton = (props) => {
  return(
    <div className="searchLocationButton">
      use my location
      <LocationPinSVG />
    </div>
  )
}

export default SearchLocationButton
