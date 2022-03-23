import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const EditProduct = (props) => {

    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('')
    const history = useHistory()
    const [data, setData] = useState('')


    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(result => {
                // console.log(result.data)
                setTitle(result.data.title)
                setPrice(result.data.price)
                setDescription(result.data.description)
                return setData(result.data)
            })
            .catch(err => console.log(`error: ${err}`))
    }, []);


    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                history.push(`/product/${id}`)
                console.log(res)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                </p>

                <p>
                    <label>Description</label><br />
                    <input type="text"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default EditProduct