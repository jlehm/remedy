import React from 'react'
import SignUpForms_Owner from './../components/SignUpForms_Owner.js'
import SignUpForms_Billing from './../components/SignUpForms_Billing.js'
import SignUpForms_Payment from './../components/SignUpForms_Payment.js'
import SignUpForms_Service from './../components/SignUpForms_Service.js'

import './../components/SignUpForms.css'

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

/*
const SignUpForms2 = ({ index, state, onChange, onSubmit, increment, decrement }) => {
  switch(index) {
    case 0:
  return <SignUpForms_Owner state={state} onChange={onChange} decrement={decrement} increment={increment} />
    case 1:
      return <SignUpForms_Service state={state} onChange={onChange} decrement={decrement}  increment={increment} />
    case 2:
      return <SignUpForms_Billing state={state} onChange={onChange} decrement={decrement} increment={increment} />
    case 3:
      return <SignUpForms_Payment state={state} onChange={onChange} decrement={decrement} increment={increment} />
    default:
      return null;
  }
}
*/

const SignUpForms = ({index}) => 
  SignUpFormsArray[{index}]


const SignUpForms_Owner_ = ({ state, onChange, decrement, increment }) => 
  <SignUpForms_Owner state={state} onChange={onChange} decrement={decrement} increment={increment} />

const SignUpForms_Service_ = ({ state, onChange, decrement, increment }) => 
  <SignUpForms_Service state={state} onChange={onChange} decrement={decrement}  increment={increment} />

const SignUpForms_Billing_ = ({ state, onChange, decrement, increment }) => 
  <SignUpForms_Billing state={state} onChange={onChange} decrement={decrement} increment={increment} />

const SignUpForms_Payment_ = ({ state, onChange, decrement, increment }) => 
  <SignUpForms_Payment state={state} onChange={onChange} decrement={decrement} increment={increment} />



const SignUpFormsArray = [
  SignUpForms_Owner_,
  SignUpForms_Service_,
  SignUpForms_Payment_,
  SignUpForms_Billing_
]

/*
const FormCarousel = ( {array, currentIndex} ) => {
  <React.Fragment> 
    <SignUpForms currentIndex={currentIndex} array={array}  />
  </React.Fragment>
}
*/

class Onboarding extends React.Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
  }
  onChange = event => 
    this.setState({ [event.target.name]: event.target.value })
  

  increment_signUpForms_index = () => 
    this.setState({ _signUpForms_index: this.state._signUpForms_index++ })
  
  
  onSubmit = event => {
    //const { firstName, middleName, lastName, phoneNumber } = this.state
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())  
    .then(json => console.log(json))
    //console.log({ firstName, middleName, lastName, phoneNumber })
    event.preventDefault()
  }

  decrementIndex = (event) => {
    event.preventDefault()
    this.setState({ _signUpForms_index: this.state._signUpForms_index-- })
  }

  incrementIndex = (event) => {
    event.preventDefault()
    this.setState({ _signUpForms_index: this.state._signUpForms_index++ })
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
        <SignUpForms index={this.state._signUpForms_index} state={this.state} onChange={this.onChange} onSubmit={this.addUser} increment={this.incrementIndex} decrement={this.decrementIndex} />
      </React.Fragment>
    )
  }
}

export default withFirebase(Onboarding)