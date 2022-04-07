import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const List = (props) => {

    const borderstyle = {
        border: '1px solid black',
        borderCollapse: 'collapse'
    }

    const [list, setList] = useState([])

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res)
                setList(list.filter((author) => author._id !== id))
            })
            .catch(err => console.log(err))


    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data)
                setList(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <Link to='/new'>Add an author</Link>
            <p>We have quotes by:</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <table style={borderstyle}>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            list ?

                                list.sort((a, b) => {
                                    let fa = a.name.toLowerCase(),
                                        fb = b.name.toLowerCase();

                                    if (fa < fb) {
                                        return -1;
                                    }
                                    if (fa > fb) {
                                        return 1
                                    }
                                    return 0
                                }).map((author, idx) => {
                                    return (

                                        <tr key={author._id}>
                                            <td style={borderstyle}>{author.name}</td>
                                            <td style={borderstyle}><Link to={`/edit/${author._id}`}>Edit</Link></td>
                                            <td style={borderstyle}><button onClick={() => deleteAuthor(author._id)}>Delete</button></td>
                                        </tr>

                                    )
                                }) :
                                <></>
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default List