import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Table.css';

const Table = () => {
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

    const loading = () => {
        return (
            <div className='spinnerContainer'>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    };

    return (
        <div className='rootContainer'>
            <div className='headerContainer'>
                <div>
                    <h1 className='pokedexHeader'>Pokédex Table</h1>
                    <div className='searchContainer'>
                        <input
                            className="form-control"
                            aria-label="Pokemon Search"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder='Search a name here'
                            type='text' value={val || ''}
                            onChange={e => searched(e.target.value)} />
                        <button type="button" className="btn btn-primary" onClick={onClick}>Clear Search</button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className='tableContainer'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Num</th>
                            <th scope="col" className='thead-name'>Name</th>
                            <th scope="col" className='thead-image'>Image</th>
                            <th scope="col" className='thead-type'>Type</th>
                            <th scope="col" className='thead-weaknesses'>Weaknesses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e, i) => (
                            <tr key={i}>
                                <td className='pokemonNum'>
                                    {e.num}
                                </td>
                                <td className='pokemonName'>
                                    {e.name}
                                </td>
                                <td className='pokemonImage'>
                                    <img src={e.img}
                                        className='pokemonImg'
                                        height='60px'
                                        width='60px'
                                        alt={e.name} />
                                </td>
                                <td className='pokemonType'>
                                    {e.type && e.type.join(' - ')}
                                </td>
                                <td className='pokemonWeaknesses'>
                                    {e.weaknesses && e.weaknesses.join(' - ')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;