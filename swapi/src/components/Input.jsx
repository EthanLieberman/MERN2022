import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Input = (props) => {

    const [category, setCategory] = useState('people')
    const [index, setIndex] = useState(1)
    const history = useHistory()


    const search = (e) => {
        e.preventDefault();
        if (index < 1 ){
            history.push('/404')
        }
        history.push(`/${category}/${index}`)
        
    }







    return (
        <form onSubmit={search}>
            {JSON.stringify(category)} : {JSON.stringify(index)}
            <label>Search for </label>
            <select onChange={(e) => { setCategory(e.target.value) }} value={category}>
                <option>people</option>
                <option>planets</option>
                <option>starships</option>
            </select>
            <label>ID</label>
            <input type="number" onChange={(e) => { setIndex(e.target.value) }} value={index} />
            <button>Search</button>
        </form>
    )
}

export default Input