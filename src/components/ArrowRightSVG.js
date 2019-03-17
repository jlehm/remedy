import React from 'react'

const ArrowRightSVG = ({
  style = {
    verticalAlign: "middle",
  },
  height = "20px",
  viewBox = "0 0 22 45"
}) => (
  <svg
    width={height}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <path id="Path" d="M22,22.5c0,0.8-0.3,1.6-0.8,2.2L4.6,44.1c-1.1,1.2-2.8,1.2-3.8,0s-1.1-3.2,0-4.5l14.7-17.1L0.8,5.4c-1.1-1.2-1.1-3.2,0-4.5c1.1-1.2,2.8-1.2,3.8,0l16.6,19.3C21.7,20.9,22,21.7,22,22.5z"/>
  </svg>
)

export default ArrowRightSVG
