import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {


  const [pokemon, setPokemon] = useState([])

  const mapped = pokemon.map((mon, ind) => mon)
  // console.log(mapped)


// vanilla fetch
  // const getMon = () => fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
  //   .then(response =>{
  //       return response.json();
  //   })
  //   .then(response => {
  //     // console.log(response)
  //     setPokemon(response.results)
  //   })
  //   .catch(err => {
  //       console.log(err);
  //   })




  // axios fetch
  const getMon = () => axios.get('https://pokeapi.co/api/v2/pokemon?limit=807"').then(response=>{
    console.log(response.data.results);
    setPokemon(response.data.results);
})







  return (
    <div className="App">
      <button onClick={getMon}>Get Pokemon</button>
      {
        pokemon.map((mon, ind) =>{
          return <p key={ind}>{mon.name}</p>
        })
      }
    </div>
  );
}

export default App;
