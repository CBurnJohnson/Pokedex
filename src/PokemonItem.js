import React, { useState } from 'react';
import axios from 'axios';

const PokemonItem = ({ pokemonName, pokemonUrl }) => {
    const [pokemonSprite, setPokemonSprite] = useState();

    // Grabbing the rest of the pokemon's data
    axios.get(pokemonUrl).then(res => {
        setPokemonSprite(res.data.sprites.back_default);
    });

    return (
        <div className='pokemon-item'>
            {pokemonName} <img src={pokemonSprite} alt='' />
        </div>
    );
};

export default PokemonItem;
