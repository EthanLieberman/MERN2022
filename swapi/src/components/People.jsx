import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const People = (props) => {

    const history = useHistory()

    const [request, setRequest] = useState('')

    const { int } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${int}`)
            .then(response => {
                setRequest(response.data)
            })
            .catch(err => {
                console.log(err)
                history.push('/404')
            });
    }, [int]);


    return (
        <div>
            <h3>Data On Individual:</h3>
            <p>Name: {request.name}</p>
            <p>Height: {request.height}</p>
            <p>Mass: {request.mass}</p>
            <p>birthyear: {request.birth_year}</p>
        </div>
    )
}

export default People