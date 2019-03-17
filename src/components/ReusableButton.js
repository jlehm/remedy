import React from 'react'
import './ReusableButton.css'

const ReusableButton = ({label, type, onClick}) => (
  <div className="reusableButtonWrapper">
    <button className="reusableButton" type={type} onClick={onClick}>
      {label}
    </button>
  </div>
)

export default ReusableButton
