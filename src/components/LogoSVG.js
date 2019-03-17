import React from 'react'
import './../components/LogoSVG.css'

const LogoSVG = ({
  style = {
    display: "inline-block",
    verticalAlign: "middle",
  },
  fill = "#50E3C2",
  width="40px",
  height="40px",
  viewBox = "0 0 512 512"
}) => (
  <div className="logoSVGWrapper">
    <svg
      fill={fill}  
      width={width}
      height={height}
      style={style}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <path d="M485.291,129.408l-224-128c-3.285-1.877-7.296-1.877-10.581,0l-224,128c-3.328,1.899-5.376,5.44-5.376,9.259v234.667
          c0,3.819,2.048,7.36,5.376,9.259l224,128c1.643,0.939,3.456,1.408,5.291,1.408s3.648-0.469,5.291-1.408l224-128
          c3.328-1.899,5.376-5.44,5.376-9.259V138.667C490.667,134.848,488.619,131.307,485.291,129.408z"/>
    </svg>
  </div>
)

export default LogoSVG
