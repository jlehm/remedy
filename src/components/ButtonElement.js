import React from 'react'
import './ButtonElement.css'

class ButtonElement extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <React.Fragment>
        <button className="buttonElement" onClick={this.props.onSubmit}>
          { this.props.label }
        </button>
      </React.Fragment>
    )
  }
}

export default ButtonElement