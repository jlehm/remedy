import React from 'react'
import { Provider } from './../containers/SearchContext.js'

class SearchProvider extends React.Component {
  constructor(){
    super()
    this.state = {
      advancedSearch: false,
      searchInput: "",
      searchMatch: false,
      possibleMatches: ["one","two","three","four","five"],
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
  handleReturn = (e) => {
    if (e.key === 'Enter') {
      console.log('do search'); //dispatch search function
    }
  }
  handleEscape = (e) => {
    if (e.keyCode === 27) {
      console.log('do clear'); //dispatch search function
    }
  }
  handleDetectKeyPress = (e) => {
    if (e.keyCode === 27) {
      this.setState({ searchInput: "" })
      console.log('bang!')

    }
    if (e.key === 'Enter') {
      console.log('do search');
    }
}

  render() {
    return (
      <Provider value={{
        test: "This is a test",
        advancedSearch: this.state.advancedSearch,
        searchInput: this.state.searchInput,
        searchMatch: this.state.searchMatch,
        searchPlaceholder: this.state.searchPlaceholder,
        handleInputChange: this.handleInputChange,
        triggerSearchClearInputButton: this.triggerSearchClearInputButton,
        toggleSearchSelectionButton: this.toggleSearchSelectionButton,
        handleDetectKeyPress: this.handleDetectKeyPress,
        possibleMatches: this.state.possibleMatches,
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default SearchProvider
