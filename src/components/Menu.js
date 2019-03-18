import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Menu.css';

import SignOutButton from './../components/SignOutButton.js'

class Menu extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    const routesObj = {
      "routes": [
        {
          "label": "Add your business",
          "route": "/addyourbusiness"
        },{
          "label": "About",
          "route": "/about"
        },{
          "label": "Help",
          "route": "/help"
        },{
          "label": "Sign Up",
          "route": "/signup"
        },{
          "label": "Sign In",
          "route": "/signin"
        },
      ]
    }
    if (!routesObj) {
      return null;
    }
    return (
      <div className="Menu">
        {routesObj.routes.map((route) => {
          return (
            route.route === this.props.location.pathname ) ? (null) : (<NavLink className="Menu-item" key={route.route.toString()} to={route.route}>{route.label}</NavLink>)
          })
        }
        <div className="Menu-item"><SignOutButton /></div>

      </div>
    )
  }
}

export default withRouter(Menu);
