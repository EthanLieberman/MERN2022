import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Planets = (props) => {

    const history = useHistory()

    const [request, setRequest] = useState('')

    const { int } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${int}`)
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
            <h3>Planet Data</h3>
            <p>Name: {request.name}</p>
            <p>Climate: {request.climate}</p>
            <p>Diameter: {request.diameter}</p>
            <p>Rotation Period: {request.rotation_period}</p>
        </div>
    )
}

export default Planets