import React from 'react'
import './InputElement.css'

const InputElement = ({label, type, name, value, onChange, placeholder}) => (
    <div className="fullContent">
      <div className="inputLabel">{label}</div>
      <input 
          className="inputField"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
      />
    </div>
)
export default InputElement