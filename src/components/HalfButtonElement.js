import React from 'react'
import './HalfButtonElement.css'

class HalfButtonElement extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <React.Fragment>
        <button className="halfButtonElement" type="button" onClick={this.props.onClick}>
          { this.props.label }
        </button>
      </React.Fragment>
    )
  }
}

export default HalfButtonElement