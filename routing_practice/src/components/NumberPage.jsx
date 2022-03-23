import React from 'react'
import { useParams } from 'react-router-dom'

const NumberPage = (props) => {

    const {num} = useParams()

    console.log(isNaN(num))
    

    return (
        <div>
            { isNaN(num)?
            <div>The Word is: {num}</div>
            :
            <div>The Number is: {num}</div>}
            
        </div>
    )
}

export default NumberPage