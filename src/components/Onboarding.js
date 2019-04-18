import React from 'react'
import SignUpForms_Owner from './../components/SignUpForms_Owner.js'
import SignUpForms_Billing from './../components/SignUpForms_Billing.js'
import SignUpForms_Payment from './../components/SignUpForms_Payment.js'
import SignUpForms_Service from './../components/SignUpForms_Service.js'

import ButtonElement from './../components/ButtonElement.js'

import { withFirebase } from './../containers/FirebaseContext.js'

const INITIAL_STATE = {
  _signUpForms_index: 0,
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

const SignUpForms = ({ index, state, onChange }) => {
  switch(index) {
    case 0:
      return <SignUpForms_Owner state={state} onChange={onChange} />
    case 1:
      return <SignUpForms_Service state={state} onChange={onChange} />
    case 2:
      return <SignUpForms_Billing state={state} onChange={onChange} />
    case 3:
      return <SignUpForms_Payment state={state} onChange={onChange} />
    default:
      return null;
  }
}

class Onboarding extends React.Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  increment_signUpForms_index = () => {
    this.setState = { _signUpForms_index: this.state._signUpForms_index++ }
  }
  
  onSubmit = event => {
    //const { firstName, middleName, lastName, phoneNumber } = this.state
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())  
    .then(json => console.log(json))
    //console.log({ firstName, middleName, lastName, phoneNumber })
    event.preventDefault()
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
        <SignUpForms index={this.state._signUpForms_index} state={this.state} onChange={this.onChange} />
        <ButtonElement label="submit" onSubmit={this.addUser} />
      </React.Fragment>
    )
  }
}

export default withFirebase(Onboarding)