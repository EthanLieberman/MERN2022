import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Newproduct = (props) => {

    const {addToDom} = props
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory()

    const onSumbitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res)
            addToDom(res)
            history.push('/products')
        })
        .catch(err => console.log(err))
    }


    return (
        <form style={{display: 'flex', flexDirection: 'column', width: '350px', margin: 'auto'}} onSubmit={onSumbitHandler}>
            <label>Title</label>
            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title}/>

            <label>Price</label>
            <input type='text' onChange={(e) => setPrice(e.target.value)} value={price}/>

            <label>Description</label>
            <input type='text' onChange={(e) => setDescription(e.target.value)} value={description}/>

            <button style={{marginTop: '20px'}}>Submit</button>



        </form>
    )
}

export default Newproduct