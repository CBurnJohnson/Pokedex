import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonItem = ({ pokemonName, pokemonUrl }) => {
    const [pokemonSprite, setPokemonSprite] = useState();
    const [pokemonMoves, setPokemonMoves] = useState([]);

    // Grabbing the rest of the pokemon's data
    useEffect(() => {
        axios.get(pokemonUrl).then(res => {
            setPokemonSprite(res.data.sprites.back_default);
            setPokemonMoves(res.data.moves.slice(0, 4).map(m => m.move.name));
        });
    }, [pokemonUrl]);

    return (
        <div className='pokemon-item'>
            <div className='pokemon-title'>
                {pokemonName} <img src={pokemonSprite} alt='' /> {pokemonMoves}
            </div>
        </div>
    );
};

export default PokemonItem;
