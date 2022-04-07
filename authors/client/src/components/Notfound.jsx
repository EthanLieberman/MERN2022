import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Notfound = () => {
    return (
        <div>
            <h3>Author not found, Wanna create one?</h3>
            <button  style={{marginRight: '25px'}}><Link to={'/'}>No</Link></button>
            <button><Link to={'/new'}>Yes</Link></button>
        </div>
    )
}

export default Notfound