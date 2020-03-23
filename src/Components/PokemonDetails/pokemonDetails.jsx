import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './pokemonDetails.css';

const PokemonDetails = props => {
    const [data, setData] = useState();
    const { id } = props.location.state;

    useEffect(() => {
        setData(Array(Object.values(props.location.state)));
    }, [])

    const image = data && data.map(e => e[id].img);
    const name = data && data.map(e => e[id].name);
    const num = data && data.map(e => e[id].num);
    const height = data && data.map(e => e[id].height);
    const weight = data && data.map(e => e[id].weight);
    const type = data && data.map(e => e[id].type).join(' + ');
    const candy = data && data.map(e => e[id].candy);
    const candyCount = data && data.map(e => e[id].candy_count);
    const egg = data && data.map(e => e[id].egg);
    const spawnChance = data && data.map(e => e[id].spawn_chance);
    const avgSpawns = data && data.map(e => e[id].avg_spawns);
    const spawnTime = data && data.map(e => e[id].spawn_time);
    const multipliers = data && data.map(e => e[id].multipliers);
    const weaknesses = data && data.map(e => e[id].weaknesses).join(' + ');

    return (
        <div>
            <div>
                <div className='detailsHeaderContainer'>
                    <h1 className='title'>{name} details Page</h1>
                </div>
            </div>
            <div className='jumboContainer'>
                <div className='jumbotron'>
                    <div className='imageContainer'>
                        <img src={image} height='250px' width='250px' alt={name}/>
                    </div>
                    <div className='detailSpans'>
                        <span><strong>Num:</strong> {num}</span>
                        <span><strong>Height:</strong> {height}</span>
                        <span><strong>Weight:</strong> {weight}</span>
                        <span><strong>Type:</strong> {type}</span>
                        <span><strong>Candy:</strong> {candy}</span>
                        <span><strong>Candy Count:</strong> {candyCount}</span>
                        <span><strong>Egg:</strong> {egg}</span>
                        <span><strong>Spawn Chance:</strong> {spawnChance}</span>
                        <span><strong>Avg Spawns:</strong> {avgSpawns}</span>
                        <span><strong>Spawn Time:</strong> {spawnTime}</span>
                        <span><strong>Multipliers:</strong> {multipliers}</span>
                        <span><strong>Weaknesses:</strong> {weaknesses}</span>
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