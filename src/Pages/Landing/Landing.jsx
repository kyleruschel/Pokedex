import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'

const pokéball = require('../../Assets/pokeball.png');

const Landing = () => {
    return (
        <div className='root'>
            <div className='rootChildContainer'>
                <h1 className='header'>Pokédex</h1>
                <h4 className='headerSubtitle'>Click the Pokéball to enter</h4>
                <div>
                    <Link to='/pokedexTable'>
                        <img src={pokéball} className='pokeballImage' alt='pokeball_image' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;