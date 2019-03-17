import React from 'react'
import './SearchLine.css'

class SearchLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: 'San Antonio, Texas' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  }
  render() {
    return(
      <div className="searchLineContainer">
        <div className="searchBox">
          <div className="searchLine">
            <div className="searchInput" onChange={this.handleInputChange}> {this.state.inputValue} </div>
            <div className="searchLineSubmit"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchLine
