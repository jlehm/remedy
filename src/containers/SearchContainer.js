import React from 'react'
import Search from './../features/Search.js'
import SearchDropdown from './../components/SearchDropdown.js'

import { Provider, Consumer } from './../containers/SearchContext.js'

class SearchContainer extends React.Component {
  render() {
    return (
        <Consumer>
          {(context) => (
            <React.Fragment>
              <Search
                advancedSearch={context.advancedSearch}
                searchInput={context.searchInput}
                handleInputChange={context.handleInputChange}
                triggerSearchClearInputButton={context.triggerSearchClearInputButton}
                toggleSearchSelectionButton={context.toggleSearchSelectionButton}
                handleReturn={context.handleReturn}
                handleDetectKeyPress={context.handleDetectKeyPress}
                possibleMatches={context.possibleMatches}
              />
            </React.Fragment>
          )}
        </Consumer>
    )
  }
}

export default SearchContainer
