import React from 'react'
import { useParams } from 'react-router-dom'

const ColorBox = (props) => {

    const {word, bg, color} = useParams()
    return (
        <div style={{backgroundColor: bg, color: color}}>
            {word}
        </div>
    )
}

export default ColorBox