import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonItem = ({ pokemonName, pokemonUrl }) => {
    const [pokemonSprite, setPokemonSprite] = useState();
    const [pokemonMoves, setPokemonMoves] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonWeight, setPokemonWeight] = useState();

    // Grabbing the rest of the pokemon's data
    useEffect(() => {
        axios.get(pokemonUrl).then(res => {
            setPokemonSprite(res.data.sprites.back_default);
            setPokemonMoves(res.data.moves.slice(0, 4).map(m => m.move.name));
            setPokemonType(res.data.types.map(t => t.type.name));
            setPokemonWeight(res.data.weight);
        });
    }, [pokemonUrl]);

    return (
        <div className='pokemon-item'>
            <div className='pokemon-title'>
                {pokemonName.slice(0, 1).toUpperCase() + pokemonName.slice(1)}{' '}
                <img src={pokemonSprite} alt='' />
            </div>
            <div className='pokemon-details'>
                <p>
                    Type:{' '}
                    {pokemonType.map(type => {
                        return (
                            <>
                                {type.slice(0, 1).toUpperCase() + type.slice(1)}
                                {pokemonType.length > 1 ? '/' : ''}
                            </>
                        );
                    })}
                </p>
                <p>Weight: {pokemonWeight}</p>
            </div>
            <div className='pokemon-moves'>
                <ul>
                    {pokemonMoves.map(move => {
                        return (
                            <li key={move}>
                                {move.slice(0, 1).toUpperCase() + move.slice(1)}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PokemonItem;
