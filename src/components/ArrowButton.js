import React from 'react'
import './ArrowButton.css'

const ArrowButton = ({direction, clickFunction, glyph}) => {
  return(
    <div className="arrowButtonContainer">
      <div
        className={ `${direction}ArrowButton` }
        onClick={ clickFunction } >
          { glyph }
      </div>
    </div>
  )
}

export default ArrowButton
