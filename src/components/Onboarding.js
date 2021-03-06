import React from 'react'
import SignUpForms_Owner from './../components/SignUpForms_Owner.js'
import SignUpForms_Billing from './../components/SignUpForms_Billing.js'
import SignUpForms_Payment from './../components/SignUpForms_Payment.js'
import SignUpForms_Service from './../components/SignUpForms_Service.js'
import ButtonElement from './../components/ButtonElement.js'

import './../components/SignUpForms.css'

import { withFirebase } from './../containers/FirebaseContext.js'

const INITIAL_STATE = {
  _currentStep: 0,
  _isComplete: null,
  _error: null,
  owner_firstName: '',   
  owner_middleName: '',
  owner_lastName: '',
  owner_phoneNumber: '',
  service_address1: '',
  service_address2: '',
  service_city: '',
  service_state: '',
  service_zipcode: '',
  billing_address1: '',
  billing_address2: '',
  billing_city: '',
  billing_state: '',
  billing_zipcode: '',
  payment_cardOwner: '',
  payment_cardNumber: '',
  payment_cardExpiration: '',
  payment_cardCSV: '',
  payment_address1: '',
  payment_address2: '',
  payment_city: '',
  payment_state: '',
  payment_zipcode: ''
}

const StepButton = ({ label, onClick }) => 
  <button className="buttonElement" onClick={ onClick }>{ label }</button>


class Onboarding extends React.Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    this._prev = this._prev.bind(this)
    this._next = this._next.bind(this)
  }
  onChange = event => 
    this.setState({ [event.target.name]: event.target.value })
  
  onSubmit = event => {
    //const { firstName, middleName, lastName, phoneNumber } = this.state
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())  
    .then(json => console.log(json))
    //console.log({ firstName, middleName, lastName, phoneNumber })
    event.preventDefault()
  }

  _prev = (e) => {
    e.preventDefault()
    {(this.state._currentStep !== 0)?
    (this.setState({ _currentStep: this.state._currentStep-1 })):
    (this.setState({ _currentStep: 3 }))}
  }

  _next = (e) => {
    e.preventDefault()
    {(this.state._currentStep !== 3)?
    (this.setState({ _currentStep: this.state._currentStep+1 })):
    (this.setState({ _currentStep: 0 }))}
  }

  get PrevButton() {
    let currentStep = this.state._currentStep
    if (currentStep!==0) {
      return <StepButton label="prev" onClick={this._prev}  />
    }
    return null
  }

  get NextButton() {
    let currentStep = this.state._currentStep
    if (currentStep!==3) {
      return <StepButton label="next" onClick={this._next}  />
    }
    return null
  }
  
  get SubmitButton() {
    let _isComplete = this.state._isComplete
    if (_isComplete) {
      return <ButtonElement label="submit" onSubmit={this.addUser} />
    }
    return null
  }

  addUser = e => {
    e.preventDefault();

    this.props.firebase
      .firestore.collection("owners")
        .add({
          owner_firstName: this.state.owner_firstName,   
          owner_middleName: this.state.owner_middleName,
          owner_lastName: this.state.owner_lastName,
          owner_phoneNumber: this.state.owner_phoneNumber
        })
    this.setState({
      owner_firstName: '',   
      owner_middleName: '',
      owner_lastName: '',
      owner_phoneNumber: '',
      service_address1: '',
      service_address2: '',
      service_city: '',
      service_state: '',
      service_zipcode: '',
      billing_address1: '',
      billing_address2: '',
      billing_city: '',
      billing_state: '',
      billing_zipcode: '',
      payment_cardOwner: '',
      payment_cardNumber: '',
      payment_cardExpiration: '',
      payment_cardCSV: '',
      payment_address1: '',
      payment_address2: '',
      payment_city: '',
      payment_state: '',
      payment_zipcode: ''
    })
  }

  render() {
    return(
      <React.Fragment>
        <SignUpForms_Owner state={this.state} onChange={this.onChange} index={this.state._currentStep} PrevButton={this.PrevButton} NextButton={this.NextButton}  />
        <SignUpForms_Service state={this.state} onChange={this.onChange} index={this.state._currentStep} PrevButton={this.PrevButton} NextButton={this.NextButton}  />
        <SignUpForms_Billing state={this.state} onChange={this.onChange} index={this.state._currentStep} PrevButton={this.PrevButton} NextButton={this.NextButton}  />
        <SignUpForms_Payment state={this.state} onChange={this.onChange} index={this.state._currentStep} PrevButton={this.PrevButton} NextButton={this.NextButton} SubmitButton={this.SubmitButton}  />  
      </React.Fragment>
    )
  }
}

export default withFirebase(Onboarding)