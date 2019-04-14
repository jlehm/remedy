import React from 'react'
import './PasswordForget.css'

const FormInput = ({ type, name, value, onChange, placeholder }) => (
    <React.Fragment>
        <input 
            className="passwordForgetInput"
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </React.Fragment>
)
export default FormInput