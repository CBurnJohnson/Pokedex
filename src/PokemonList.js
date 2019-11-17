import React from 'react';
import PokemonItem from './PokemonItem';

export default function PokemonList({ pokemon }) {
    return (
        <div>
            {pokemon.map(p => (
                <PokemonItem p={p} key={p} />
            ))}
        </div>
    );
}
