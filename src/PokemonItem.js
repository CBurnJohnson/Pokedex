import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const PokemonItem = ({ pokemonName, pokemonUrl }) => {
    const [pokemonSprite, setPokemonSprite] = useState();
    const [pokemonMoves, setPokemonMoves] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonWeight, setPokemonWeight] = useState();
    const [pokemonHeight, setPokemonHeight] = useState();
    const [pokemonId, setPokemonId] = useState();

    // Grabbing the rest of the pokemon's data
    useEffect(() => {
        axios.get(pokemonUrl).then(res => {
            setPokemonSprite(res.data.sprites.back_default);
            setPokemonMoves(res.data.moves.slice(0, 4).map(m => m.move.name));
            setPokemonType(res.data.types.map(t => t.type.name));
            setPokemonWeight(res.data.weight);
            setPokemonHeight(res.data.height);
            setPokemonId(res.data.id);
        });
    }, [pokemonUrl]);

    return (
        <>
            <div className='pokemon-item'>
                <div className='pokemon-title'>
                    #{pokemonId}{' '}
                    {pokemonName.slice(0, 1).toUpperCase() +
                        pokemonName.slice(1)}{' '}
                    <img src={pokemonSprite} alt='' />
                </div>
                <div className='pokemon-details'>
                    <p>
                        Type:{' '}
                        {pokemonType.map(type => {
                            return (
                                <Fragment key={type}>
                                    {type.slice(0, 1).toUpperCase() +
                                        type.slice(1)}
                                    {pokemonType.length > 1 ? '/' : ''}
                                </Fragment>
                            );
                        })}
                    </p>
                    <p>Height: {pokemonHeight}</p>
                    <p>Weight: {pokemonWeight}lbs</p>
                </div>
                <div className='pokemon-moves'>
                    <ol>
                        {pokemonMoves.map(move => {
                            return (
                                <li key={move}>
                                    {move.slice(0, 1).toUpperCase() +
                                        move.slice(1)}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
            <hr />
        </>
    );
};

export default PokemonItem;
