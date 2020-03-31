import React from 'react';
import { Link } from 'react-router-dom';
import './pokemonDetails.css';

const PokemonDetails = props => {
    const data = new Array(props.location.state);
    const { id } = props.location.state;
    const pokemon = data.map(e => e[id]);

    // Handle Missing Data
    const candyCount = pokemon[0]['candy_count'];
    const multipliers = pokemon[0]['multipliers'];

    return (
        <div>
            <div>
                <div className='detailsHeaderContainer'>
                    <h1 className='title'>{pokemon[0]['name']} details Page</h1>
                </div>
            </div>
            <div className='jumboContainer'>
                <div className='jumbotron'>
                    <div className='imageContainer'>
                        <img src={pokemon[0]['img']}
                            className='pokemonDetailsImage'
                            height='150px'
                            width='150px'
                            alt={pokemon[0]['name']}
                        />
                    </div>
                    <div className='detailSpans'>
                        <span className='pokemonDetails'><strong>Num:</strong> {pokemon[0]['num']}</span>
                        <span className='pokemonDetails'><strong>Height:</strong> {pokemon[0]['height']}</span>
                        <span className='pokemonDetails'><strong>Weight:</strong> {pokemon[0]['weight']}</span>
                        <span className='pokemonDetails'><strong>Type:</strong> {pokemon[0]['type'].join(' + ')}</span>
                        <span className='pokemonDetails'><strong>Candy:</strong> {pokemon[0]['candy']}</span>
                        <span className='pokemonDetails'><strong>Candy Count:</strong> {!candyCount ? 0 : pokemon[0]['candy_count']}</span>
                        <span className='pokemonDetails'><strong>Egg:</strong> {pokemon[0]['egg']}</span>
                        <span className='pokemonDetails'><strong>Spawn Chance:</strong> {pokemon[0]['spawn_chance']}</span>
                        <span className='pokemonDetails'><strong>Avg Spawns:</strong> {pokemon[0]['avg_spawns']}</span>
                        <span className='pokemonDetails'><strong>Spawn Time:</strong> {pokemon[0]['spawn_time']}</span>
                        <span className='pokemonDetails'><strong>Multipliers:</strong> {multipliers == null ? 0 : multipliers}</span>
                        <span className='pokemonDetails'><strong>Weaknesses:</strong> {pokemon[0]['weaknesses'].join(' + ')}</span>
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