import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
        
        // We use this state property to give control of the form element to React (as opposed to the DOM).
        this.state = {
             name: '',
             category: 'website',
             comments: ''
        }
    }

    //Instead of having three event handlers, we could have used computed property names to have just one event handler.
    
    // Called whenever the name input element changes.
    // Note the event is passed in to the handler, which allows us to read the new value of the input field.
    handleNameChange = (event) => {
        // Get the new value of the form element, and set the state.
        this.setState({
            name: event.target.value
        })
    }
    
    // Handle changes to the category select input
    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    // Handle changes to the comments text input
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    // Handle form submission
    handleSubmit = (event) => {
        // event.preventDefault() suppresses the default behaviour of the form, which would be to submit the data in a get request and refresh the page.
        event.preventDefault();
        console.log(this.state)
    }

    
    render() {
        return (
            <div>
                <h2>Please fill out the form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input
                            // Note the value attribute is set to the state property defined above.
                            // By doing this, we are saying that we want the value of this form input to equal whatever the value of the state in the component is.
                            value={this.state.name}
                            id="id-name"
                            name="name"
                            type="text"
                            ref="name-field"
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select id="id-category" name="category" onChange={this.handleCategoryChange}>
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General enquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea id="id-comments" name="comments" onChange={this.handleCommentsChange} />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default ControlledForm
