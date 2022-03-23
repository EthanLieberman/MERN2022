import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleProduct = (props) => {

    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
                console.log(res.data)
                setProduct(res.data)
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to={`/product/edit/${id}`}>Edit</Link>
        </div>
    )
}

export default SingleProduct