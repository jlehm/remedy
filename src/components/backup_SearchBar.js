import React from 'react'
import './SearchBar.css'

import SearchBarLabel from './../components/SearchBarLabel.js'
import SearchClearInputButton from './../components/SearchClearInputButton.js'
import SearchSelectionButton from './../components/SearchSelectionButton.js'


class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchBarWrapper">
        <div className="searchBar">
          {(this.props.searchInput)?
          (null):
          (<div className="searchPlaceholder" contentEditable={false}> TYPE TO SEARCH </div>)}
          <input className="searchInput" onChange={(e) => this.props.handleInputChange(e)} value={this.props.searchInput}/>
          <SearchClearInputButton triggerSearchClearInputButton={this.props.triggerSearchClearInputButton} searchInput={this.props.searchInput} />
          <SearchSelectionButton advancedSearch={this.props.advancedSearch} toggleSearchSelectionButton={this.props.toggleSearchSelectionButton} />
        </div>
      </div>
    )
  }
}

export default SearchBar
