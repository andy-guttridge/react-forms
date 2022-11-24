import React, {useState} from 'react'

function ControlledFormHooks() {
    // Use useState hook to set state for three properties with initial values.
    // Convention is to give our property a name, then pre-pend 'set' to that property name for the 'setter' method.
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        // Prevent the default form action of making a get request and reloading the page
        e.preventDefault();
        console.log(name, category,comments);
    }

    return (
        <div>
            <h2>Please fill out the form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        // Note the value attribute is set to the state property we defined above using useState().
                        // By doing this, we are saying that we want the value of this form input to equal whatever the value of the state in the component is.
                        value={name}
                        id="id-name"
                        name="name"
                        type="text"
                        // Here, the onChange attribute directly calls the setter method which useState() created for us.
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select id="id-category" name="category" onChange={(e) => setCategory(e.target.value)}>
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General enquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea id="id-comments" name="comments" onChange={(e) => setComments(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )   
}

export default ControlledFormHooks