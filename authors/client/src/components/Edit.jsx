import React, { useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Edit = () => {

    const history = useHistory()

    const {id} = useParams()
    // console.log(id)

    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data.name)
                setName(res.data.name)
            })
            .catch(err => {
                console.log(err.response.data)
                history.push('/notfound')
            })
    }, [])

    const submitAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {
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
            <Link to='/'>Home</Link>
            <p>Edit an author:</p>
            {
                errors.map((err, index) => <p key={index} style={{color: 'red'}}>{err}</p>)
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

export default Edit