import React, { useState } from 'react';
import NavBar from '../components/NavBar';

import axios from 'axios';

const Pokemon = async () => {
  const [pokemon, setPokemon] = useState([]);

  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=100',
  );
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <NavBar />
      {pokemon.map((p, i) => {
        return (
          <div key={i}>
            <span style={{ fontSize: '2em', color: 'blue' }}>{p.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
