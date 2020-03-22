import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pokedex.css';
import Table from '../../Components/Table';

const Pokedex = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [val, setVal] = useState('');
  const filtered = data.map(e => e)
    .filter(e => e.name.toLowerCase()
      .replace(/[^\w]/g, '')
      .includes(search.toLowerCase()
        .replace(/[^\w]/g, '')));

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').then(res => {
      setData(res.data.pokemon);
    })
  }, []);
    
  useEffect(() => {
    searchedData();
  }, [search])
  
  const searchedData = () => {
    if (filtered.length) {
      setData(filtered);
    }
  }
  
  const searched = e => {
    setVal(e);
    setSearch(e);
  }

  const onClick = () => {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').then(res => {
      setData(res.data.pokemon);
    })
    setVal('');
  }


  return (
    <div className='mainRoot'>
      <Table data={data} val={val} setSearch={searched} onClick={onClick} />
    </div>
  )
}

export default Pokedex;