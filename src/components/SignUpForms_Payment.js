import React from 'react'
import InputElement from './../components/InputElement.js'
import ButtonElement from './../components/ButtonElement.js'

const SignUpForms_Payment = ({ index, state, onChange, PrevButton, NextButton }) => {
  if (index !== 3) {
    return null
  }
  return (
    <form className="signUpForms">
      <InputElement label="Cardholder Name is the same as Account Owner Name" type="checkbox" name=""  />      
      <InputElement label="Cardholder Name" type="text" name="payment_cardOwner" onChange={onChange} value={state.payment_cardOwner}  />
      <InputElement label="Card Number" type="text" name="payment_cardNumber" onChange={onChange} value={state.payment_cardNumber}  />    
      <InputElement label="Card Expiration" type="text" name="payment_cardExpiration" onChange={onChange} value={state.cardExpiration}  />
      <InputElement label="Card CSV" type="text" name="payment_cardZipcode" onChange={onChange} value={state.payment_cardCSV}  />
      <InputElement label="Card Billing Address is the same as Account Billing Address" type="checkbox" name=""  />    
      <InputElement label="Card Address" type="text" name="payment_address1" onChange={onChange} value={state.payment_address1}  />
      <InputElement label="Card Address" type="text" name="payment_address2" onChange={onChange} value={state.payment_address2}  />
      <InputElement label="Card City" type="text" name="payment_city" onChange={onChange} value={state.payment_city}  />
      <InputElement label="Card State" type="text" name="payment_state" onChange={onChange} value={state.payment_state}  />
      <InputElement label="Card Zipcode" type="text" name="payment_zipcode" onChange={onChange} value={state.payment_zipcode}  />
      {PrevButton} 
      {NextButton}       
    </form>
  )
}

export default SignUpForms_Payment