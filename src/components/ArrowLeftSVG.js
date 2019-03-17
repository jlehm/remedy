import React from 'react'

const ArrowLeftSVG = ({
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
    <path d="M0.8,20.3L17.4,0.9c1.1-1.2,2.8-1.2,3.8,0c1.1,1.2,1.1,3.2,0,4.5L6.5,22.5l14.7,17.1c1.1,1.2,1.1,3.2,0,4.5c-1.1,1.2-2.8,1.2-3.8,0L0.8,24.7C0.3,24.1,0,23.3,0,22.5C0,21.7,0.3,20.9,0.8,20.3z"/>
  </svg>
)

export default ArrowLeftSVG
