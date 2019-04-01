import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import SignOutButton from './../components/SignOutButton.js'

import './../components/Menu.css'

const NavigationAuth = (props) => {
  const routesObj = {
    "routes": [
      {
        "label": "Services",
        "route": "/services"
      },{
        "label": "Coverage",
        "route": "/coverage"
      },{
        "label": "Account",
        "route": "/account"
      }
    ]
  }
  return (
    <div className="Menu">
      {routesObj.routes.map((route) => {
        return (
          route.route === props.location.pathname ) ? (null) : (<NavLink className="Menu-item" key={route.route.toString()} to={route.route}>{route.label}</NavLink>)
        })
      }
      {props.authUser.roles.includes('ADMIN') && (
        <NavLink to={'/admin'} className="Menu-item" key="admin">Admin</NavLink>
      )}
      <SignOutButton />
    </div>
  )
}

export default withRouter(NavigationAuth)
