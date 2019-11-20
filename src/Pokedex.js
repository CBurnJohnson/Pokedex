import React from 'react';
import Pagination from './Pagination';
import PokemonList from './PokemonList';
import './style.css';

const Pokedex = ({ pokemon, goToPrevPage, goToNextPage, loading }) => {
    return (
        <>
            <h1 className='title'>Pokédex</h1>
            <div className='container'>
                {loading && <div className='loading'>...loading</div>}
                <div className='column-headers'>
                    <h3>Name</h3>
                    <h3>Details</h3>
                    <h3>Moves</h3>
                </div>
                <hr />
                <PokemonList pokemon={pokemon} />
            </div>
            <Pagination
                goToNextPage={goToNextPage}
                goToPrevPage={goToPrevPage}
            />
        </>
    );
};

export default Pokedex;
