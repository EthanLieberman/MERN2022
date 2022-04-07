import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const New = () => {

    const history = useHistory()

    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])

    const submitAuthor = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch(err => {
                console.log(err.response.data.error)
                const { errors } = err.response.data.error;
                const messages = Object.keys(errors).map(error => errors[error].message)
                console.log(messages);
                setErrors(messages);
            })
    }


    return (
        <div>
            {/* {JSON.stringify(name)} */}
            {/* {JSON.stringify(errors)} */}
            <Link to='/'>Home</Link>
            <p>Add a new author:</p>
            {
                errors.map((err, index) => <p key={index} style={{ color: 'red' }}>{err}</p>)
            }
            <form onSubmit={submitAuthor}>
                <label>Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                <div>
                    <button><Link to='/'>Cancel</Link></button>
                    <button>Submit</button>
                </div>
            </form>




        </div>
    )
}

export default New