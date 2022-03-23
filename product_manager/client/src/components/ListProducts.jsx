import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'

const ListProducts = (props) => {

    const {removeFromDom} = props

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            removeFromDom(id)
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <fieldset>
                <h3>All Products</h3>
                {/* {JSON.stringify(props.list.products)} */}
                {props.list?
                props.list.map((product, idx) => {
                    return <p key={idx}><Link to={`/product/${product._id}`} >{product.title}, {product.price}, {product.description}</Link> <button onClick={e => deleteProduct(product._id)}>Delete</button></p>
                }):
                <div></div>
            }
                
            </fieldset>
        </div>
    )
}

export default ListProducts