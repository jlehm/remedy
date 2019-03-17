import React from 'react'
import { withFirebase } from './../containers/FirebaseContext.js'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import './SignUpForm.css'

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
}

class SignUpForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {...INITIAL_STATE}
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  }
  onSubmit = event => {
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = [];

    if (isAdmin) {
      roles.push('ADMIN');
    }
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            roles,
          })
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ error })
      })
    event.preventDefault();
  }
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''
    return (
      <form
        className="signUpForm"
        onSubmit={this.onSubmit}>
        <div>Already a member? <a href="/">Sign In</a></div>
        <div className="signUpFormLabel">Create an Account</div>
        <div>Have a business? <a href="/signup">Create a business account</a></div>
        <div className="signInFormInputWrapper">
          <input
            className="signUpFormInput"
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="signInFormInputWrapper">
          <input
            className="signUpFormInput"
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="signUpFormInputWrapper">
          <input
            className="signUpFormInput"
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="signUpFormInputWrapper">
          <input
            className="signUpFormInput"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="SignUpFormInputWrapper">
        <label>
          Admin:
          <input
            name="isAdmin"
            type="checkbox"
            checked={isAdmin}
            onChange={this.onChangeCheckbox}
          />
        </label>
        </div>
        <div>By creating an account, you agree to our <a href="/">User Agreement</a> and acknowledge reading our  <a href="/">User Privacy Notice.</a></div>
        <div className="signUpFormInputWrapper">
          <button
            className="signUpFormButton"
            disabled={isInvalid}
            type="submit">Create an Account
          </button>
        </div>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpFormWithFirebase = compose(
withRouter,
withFirebase,
)(SignUpForm)

export { SignUpFormWithFirebase }
