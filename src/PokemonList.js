import React from 'react';
import PokemonItem from './PokemonItem';

export default function PokemonList({ pokemon }) {
    return (
        <div>
            {pokemon.map(p => (
                <PokemonItem pokemonName={p[0]} pokemonUrl={p[1]} key={p[0]} />
            ))}
        </div>
    );
}
