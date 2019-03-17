import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { withFirebase } from './../containers/FirebaseContext.js'

import './../components/ReusableInput.css'
import './../components/ReusableButton.css'


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

class SignInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { email, password } = this.state
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ error })
      })
    event.preventDefault()
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { email, password, error } = this.state

    const isInvalid = password === '' || email === ''

    return (
      <div className="signInFormWrapper">
        <form
          className="signInForm"
          onSubmit={this.onSubmit}>
            <div className="signInFormLabel">Welcome</div>
            <div>Sign In or <a href="/signup" className="signInFormLabelLink">create an account</a></div>
            <div className="signInFormInputWrapper">
              <input
                className="signInFormInput"
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />
            </div>
            <div className="signInFormInputWrapper">
              <input
                className="signInFormInput"
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
          </div>
          <div className="signInFormInputWrapper">
            {(!isInvalid)?
            (<button
              className="signInFormButton"
              type="submit"
            >
              Sign In
            </button>):
            (null)}
          </div>
          <div>
            <div className="borderBox"></div>
            {error && <p>{error.message}</p>}
          </div>
        </form>
      </div>
    )
  }
}

const SignInFormWithFirebase = compose(
  withRouter,
  withFirebase,
)(SignInForm)

export default SignInFormWithFirebase
