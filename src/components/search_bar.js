import React, {Component} from 'react'

// component based class
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: props.term
        }
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={(event) => 
                    this.onInputChange(event.target.value)}>
                </input>
            </div>
        )
    }

// event handler
    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar

/**
 * remarque:
 * functional component do not have state, only class based component
 * - a controlled field is a field wich value is set by the value element
 */

// plain old javascript object use to record change component based fontion
/* const SearchBar = () => {
    return <input/>
} */
