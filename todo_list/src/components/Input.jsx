import React, { useState } from 'react'

const Input = (props) => {


    const [input, setInput] = useState('')

    const submit = (e) => {
        e.preventDefault();
        const todo = {
            title: input,
            isChecked: false
        }
        props.createTodo(todo)
    }

    

    
    return (

        <fieldset>
            <legend>Input</legend>

            <form onSubmit={ submit }>
                <input style={{borderRadius: '5px', backgroundColor: 'lightgray' }} type="text" onChange={ (e) => setInput(e.target.value)}/>
                <br />
                <button style={{borderRadius: '5px', backgroundColor: 'skyblue'}}>Add</button>
            </form>

        </fieldset>
    )
}

export default Input