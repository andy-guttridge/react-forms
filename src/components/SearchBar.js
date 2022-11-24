import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       names: importedNames
    }
  }

  handleChange = (event) => {
    // Retrieve the input text from the form input, and use the filter method to find only those names that are include
    // the search term as a substring.
    let inputText = event.target.value.toLowerCase()
    let filteredNames = importedNames.filter(name => name.toLowerCase().includes(inputText))

    // Set the state of the component to display only the filtered names
    this.setState({
        names: filteredNames
    })
  }

  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>Matching names found: {this.state.names.length}</p>
        <form>
            {/* We use an arrow function to specify the event handler, so that we can capture the event and pass it in to the handler */}
            <input type="text" placeholder="Search names" onChange={(event) => this.handleChange(event)}></input>
        </form>
        <div style={{margin: "auto"}}>
            {/* We use map to create a <p> element for each name in the list */}
            {this.state.names.map(name => <p key={name}>{name}</p> )}
        </div>
      </div>
    )
  }
}

export default SearchBar