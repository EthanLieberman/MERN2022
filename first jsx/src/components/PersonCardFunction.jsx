import React, { Component } from 'react';

const PersonFunc = props => {
    return (
        <div>
            <h2>{props.person.firstName}</h2>
            {/* <h1>{props.firstName} {props.lastName}</h1>
            <p>{props.age}</p>
            <p>{props.hairColor}</p> */}
        </div>
    )
}

export default PersonFunc;