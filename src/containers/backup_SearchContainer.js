import React from 'react'
import Search from './../features/Search.js'

import { Provider, Consumer } from './../containers/SearchContext.js'

class SearchContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      advancedSearch: false,
      searchInput: "",
      searchMatch: false,
      activityInput: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.triggerSearchClearInputButton = this.triggerSearchClearInputButton.bind(this)
    this.toggleSearchSelectionButton = this.toggleSearchSelectionButton.bind(this)
  }
  handleInputChange = e => {
    this.setState({
      searchInput: e.target.value,
    })
  }
  handleActivityInputChange = e => {
    this.setState({
      activityInput: e.target.value,
    })
  }
  triggerSearchClearInputButton = () => {
    this.setState({
      searchInput: "",
    })
  }
  toggleSearchSelectionButton = (advancedSearch) => {
    this.setState({
      advancedSearch: !this.state.advancedSearch,
    })
  }
  componentDidMount() {
    fetch('http://tomatotomatotomato.s3-website.us-east-2.amazonaws.com/activities.json')
      .then(response => response.json())
      .then(json => this.setState({json}))
  }
  render() {
    return (
        <div>
        <Consumer>
            {(context) => (context.state.test)}
        </Consumer>
        <Search
          advancedSearch={this.state.advancedSearch}
          searchInput={this.state.searchInput}
          handleInputChange={this.handleInputChange}
          handleActivityInputChange={this.handleActivityInputChange}
          triggerSearchClearInputButton={this.triggerSearchClearInputButton}
          toggleSearchSelectionButton={this.toggleSearchSelectionButton}
        />
        </div>
    )
  }
}

export default SearchContainer
