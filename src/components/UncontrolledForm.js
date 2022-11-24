import React, { Component } from 'react'

export class UncontrolledForm extends Component {

    // Note we do not use any state in this component, as it is not controlled by React
    constructor(props) {
        super(props)

        // We create refs here, which will allow us to reference the form elements to retrieve their values etc.
        // Without these, we could not access them without using state, event handlers etc.
        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComments = React.createRef();
    }
    handleSubmit = (event) => {

        // preventDefault() stops the form from making a get request and refreshing the page.
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComments.current.value)
    }
    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>

                {/* The form elements do not have onChange or onSubmit attributes, as the DOM is managing these */}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        {/* Note that each form element has a 'ref' attribute to which we assign the value of the refs we created in the constructor */}
                        <input
                            id="id-name"
                            name="name"
                            type="text"
                            // When we use refs, we have to use the defaultValue attribute if we want to give our form elements an initial value, since we can't do this by setting the state/
                            defaultValue="John Smith"
                            ref={this.inputName}
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select
                            id="id-category"
                            name="category"
                            ref={this.inputCategory}
                        >
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea
                            id="id-comments"
                            name="comments"
                            ref={this.inputComments}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm
