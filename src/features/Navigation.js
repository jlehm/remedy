import React from 'react'

import AuthUserContext from './../containers/AuthUserContext.js'
import withAuthentication from './../HOCs/withAuthentication.js'
import NavigationAuth from './../components/NavigationAuth.js'
import NavigationNonAuth from './../components/NavigationNonAuth.js'

import './../components/Menu.css'

const Navigation = () => (
  <React.Fragment>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? (
            <NavigationAuth authUser={authUser} />
          ) : (
            <NavigationNonAuth />
          )
        }
      </AuthUserContext.Consumer>
  </React.Fragment>
)

export default withAuthentication(Navigation)
