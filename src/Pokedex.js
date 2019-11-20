import React from 'react';
import Pagination from './Pagination';
import PokemonList from './PokemonList';
import './style.css';

const Pokedex = ({ pokemon, goToPrevPage, goToNextPage }) => {
    return (
        <div className='container'>
            <PokemonList pokemon={pokemon} />
            <Pagination
                goToNextPage={goToNextPage}
                goToPrevPage={goToPrevPage}
            />
        </div>
    );
};

export default Pokedex;
