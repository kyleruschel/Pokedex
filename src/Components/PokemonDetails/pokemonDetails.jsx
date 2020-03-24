import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PokemonDetails.css';

const PokemonDetails = props => {
    const [data, setData] = useState();
    const { id } = props.location.state;

    useEffect(() => {
        setData(Array(Object.values(props.location.state)));
    }, [])

    const pokemon = data && data.map(e => e[id]);

    return (
        <div>
            <div>
                <div className='detailsHeaderContainer'>
                    <h1 className='title'>{pokemon && pokemon[0]['name']} details Page</h1>
                </div>
            </div>
            <div className='jumboContainer'>
                <div className='jumbotron'>
                    <div className='imageContainer'>
                        <img src={pokemon && pokemon[0]['img']}
                            className='pokemonDetailsImage'
                            height='150px'
                            width='150px'
                            alt={pokemon && pokemon[0]['name']}
                        />
                    </div>
                    <div className='detailSpans'>
                        <span className='pokemonDetails'><strong>Num:</strong> {pokemon && pokemon[0]['num']}</span>
                        <span className='pokemonDetails'><strong>Height:</strong> {pokemon && pokemon[0]['height']}</span>
                        <span className='pokemonDetails'><strong>Weight:</strong> {pokemon && pokemon[0]['weight']}</span>
                        <span className='pokemonDetails'><strong>Type:</strong> {pokemon && pokemon[0]['type'].join(' + ')}</span>
                        <span className='pokemonDetails'><strong>Candy:</strong> {pokemon && pokemon[0]['candy']}</span>
                        <span className='pokemonDetails'><strong>Candy Count:</strong> {pokemon && pokemon[0]['candy_count']}</span>
                        <span className='pokemonDetails'><strong>Egg:</strong> {pokemon && pokemon[0]['egg']}</span>
                        <span className='pokemonDetails'><strong>Spawn Chance:</strong> {pokemon && pokemon[0]['spawn_chance']}</span>
                        <span className='pokemonDetails'><strong>Avg Spawns:</strong> {pokemon && pokemon[0]['avg_spawns']}</span>
                        <span className='pokemonDetails'><strong>Spawn Time:</strong> {pokemon && pokemon[0]['spawn_time']}</span>
                        <span className='pokemonDetails'><strong>Multipliers:</strong> {pokemon && pokemon[0]['multipliers']}</span>
                        <span className='pokemonDetails'><strong>Weaknesses:</strong> {pokemon && pokemon[0]['weaknesses'].join(' + ')}</span>
                        <div className='buttonContainer'>
                            <Link to='/pokedexTable'>
                                <button className='btn btn-info'>Back to the Table</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails;