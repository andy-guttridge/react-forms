import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
        
        // We use this state property to give control of the form element to React (as opposed to the DOM).
        this.state = {
             name: ''
        }
    }
    
    // Called whenever the form input element changes.
    // Note the event is passed in to the handler, which allows us to read the new value of the input field.
    updateForm = (event) => {
        // Get the new value of the form element, and set the state.
        let newValue = event.target.value
        console.log(newValue)
        this.setState({name: newValue})
    }
    
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        // Note the value attribute is set to the state property defined above.
                        // By doing this, we are saying that we want the value of this form input to equal whatever the value of the state in the component is.
                        value={this.state.name}
                        id="id-name"
                        name="name"
                        type="text"
                        ref="name-field"
                        onChange={this.updateForm}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm
