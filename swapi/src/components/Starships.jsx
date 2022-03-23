import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Starships = (props) => {

    const history = useHistory()

    const [request, setRequest] = useState('')

    const { int } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${int}`)
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
        <h3>StarShip Data</h3>
        <p>Name: {request.name}</p>
        <p>Manufacturer: {request.manufacturer}</p>
        <p>Hyperdrive Rating: {request.hyperdrive_rating}</p>
        <p>Starship Class: {request.starship_class}</p>
        
    </div>
    )
}

export default Starships