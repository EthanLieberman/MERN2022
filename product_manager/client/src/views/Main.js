import React from 'react'
import Newproduct from '../components/Newproduct'


const main = (props) => {
    const {addToDom} = props
    return (
        <div>
            <fieldset>
                <Newproduct addToDom={addToDom}/>
            </fieldset>
        </div>
    )
}

export default main