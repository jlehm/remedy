import React from 'react'

const LocationPinSVG = ({
  style = {
    verticalAlign: "middle",
  },
  height = "20px",
  viewBox = "0 0 16 16"
}) => (
  <svg
    width={height}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M8,0A6,6,0,0,0,2,6c0,3.85,4.32,8.66,5,9.4A1.31,1.31,0,0,0,8,16a1.31,1.31,0,0,0,1-.6c0.68-.73,5-5.54,5-9.4A6,6,0,0,0,8,0ZM8,10a4,4,0,1,1,4-4A4,4,0,0,1,8,10Z"></path>
  </svg>
)

export default LocationPinSVG
