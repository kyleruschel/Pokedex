import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pokedex.css';
import Table from '../../Components/Table';

const Pokedex = () => {
const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').then(res => {
        setData(res.data.pokemon);
    })
  }, []);

    return (
        <div className='mainRoot'>
            <Table data={data} />
        </div>
    )
}

export default Pokedex;