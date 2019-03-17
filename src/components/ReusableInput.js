import React from 'react'
import './../components/ReusableInput.css'

const ReusableInput = ({ type, label, placeholder, onChange }) => (
  <div className="reusableInputWrapper">
    <div className="reusableInputLabel">{label}</div>
    <input type={type} className="reusableInput" placeholder={placeholder} onChange={onChange}/>
  </div>
)

export default ReusableInput
