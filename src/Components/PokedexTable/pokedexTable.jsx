import React, { useState, useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    removeDuplicates,
    cleanedTypes,
    cleanedWeaknesses,
} from '../../Helpers/removeDuplicates';

import './pokedexTable.css';

const PokedexTable = () => {
    // State hooks
    const [data, setData] = useState([]);
    const [val, setVal] = useState('');
    const [selectedType, setSelectedType] = useState([]);
    const [selectedWeakness, setSelectedWeakness] = useState([]);

    // Lifecycle hooks          
    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').then(res => {
            setData(res.data.pokemon);
        })
    }, []);

    // search bar
    const searched = e => {
        setVal(e);
        const makeLowerCase = e.toLowerCase();
        const filteredName = data.map(e => e)
            .filter(e => e.name.toLowerCase()
                .replace(/[^\w]/g, '')
                .includes(makeLowerCase
                    .replace(/[^\w]/g, '')));
        setData(filteredName);
    }

    // Filter by Type function
    const selectValue1 = e => {
        const newDataForTypesOnly = data.map(i => i).filter(i => i.type.includes(e));
        setData(newDataForTypesOnly);

        if (e !== undefined) {
            setSelectedType(prev => ([
                ...prev,
                e
            ]));
        }
    }

    // Filter by Weaknesses function
    const selectValue2 = e => {
        const newDataforWeaknessesOnly = data.map(i => i).filter(i => i.weaknesses.includes(e));
        setData(newDataforWeaknessesOnly);

        if (e !== undefined) {
            setSelectedWeakness(prev => ([
                ...prev,
                e
            ]));
        }
    }

    // reset function
    const reset = () => {
        axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').then(res => {
            setData(res.data.pokemon);
        })
        setVal('');
        setSelectedType([]);
        setSelectedWeakness([]);
    }

    // clean up data for filters
    const filteredType = removeDuplicates([...cleanedTypes(data)]);
    const filteredWeakness = removeDuplicates([...cleanedWeaknesses(data)]);

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
                            placeholder='Search by Pokémon name'
                            type='text' value={val || ''}
                            onChange={e => searched(e.target.value)} />
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={reset}
                        >
                            Refresh
                        </button>
                    </div>
                    <div className='selectContainer'>
                        <select
                            className="custom-select my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            onChange={e => selectValue1(e.target.value)}
                            value={0}
                        >
                            <option value={0}>Filter by Type...</option>
                            {filteredType.map((e, i) => (
                                <option value={e} key={i}>{e}</option>
                            ))}
                        </select>
                        <select
                            className="custom-select my-2 mr-sm-2"
                            id="inlineFormCustomSelectPref2"
                            onChange={e => selectValue2(e.target.value)}
                            value={0}
                        >
                            <option value={0}>Filter by Weaknesses...</option>
                            {filteredWeakness.map((e, i) => (
                                <option value={e} key={i}>{e}</option>
                            ))}
                        </select>
                        <div className='pillType'>
                            {selectedType.map((e, i) => (
                                <Badge pill variant="secondary" id='pillType' key={i}>{`Type: ${e}`}
                                </Badge>
                            ))}
                            {selectedWeakness.map((e, i) => (
                                <Badge pill variant="secondary" id='pillWeakness' key={i}>{`Weakness: ${e}`}
                                </Badge>
                            ))}
                        </div>
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
                            <th scope="col" className='thead-height'>Height</th>
                            <th scope="col" className='thead-weight'>Weight</th>
                        </tr>
                    </thead>
                    {!data.length ? (
                        <tbody>
                            <tr>
                                <td colSpan='7'>No data available, please refresh and try again</td>
                            </tr>
                        </tbody>) : (
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
                                            <Link to={{
                                                pathname: '/pokemonDetails',
                                                state: {
                                                    ...data,
                                                    id: i,
                                                }
                                            }}>
                                                <div>
                                                    <img src={e.img}
                                                        className='pokemonImg'
                                                        height='60px'
                                                        width='60px'
                                                        alt={e.name} />
                                                </div>
                                            </Link>
                                            <p className='instructions'>Click image for more details</p>
                                        </td>
                                        <td className='pokemonType'>
                                            {e.type.join(' + ')}
                                        </td>
                                        <td className='pokemonWeaknesses'>
                                            {e.weaknesses.join(' + ')}
                                        </td>
                                        <td className='pokemonHeight'>
                                            {e.height}
                                        </td>
                                        <td className='pokemonWeight'>
                                            {e.weight}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                </table>
            </div>
        </div>
    )
}

export default PokedexTable;