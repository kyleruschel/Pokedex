import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { removeDuplicates, mapDataType, mapDataWeakness } from '../Helpers/removeDuplicates';
import './PokedexTable.css';

const PokedexTable = () => {
    // State hooks
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [val, setVal] = useState('');

    const filteredName = data.map(e => e)
        .filter(e => e.name.toLowerCase()
            .replace(/[^\w]/g, '')
            .includes(search.toLowerCase()
                .replace(/[^\w]/g, '')));

    // Lifecycle hooks          
    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').then(res => {
            setData(res.data.pokemon);
        })
    }, []);

    useEffect(() => {
        setData(filteredName);
    }, [search])

    useEffect(() => {
        selectValue1();
        selectValue2();
    }, [])

    // search bar
    const searched = e => {
        setVal(e);
        setSearch(e);
    }

    // Filter by Type function
    const selectValue1 = e => {
        const newDataForTypesOnly = data.map(i => i).filter(i => i.type.includes(e));
        setData(newDataForTypesOnly);
    }

    // Filter by Weaknesses function
    const selectValue2 = e => {
        const newDataforWeaknessesOnly = data.map(i => i).filter(i => i.weaknesses.includes(e));
        setData(newDataforWeaknessesOnly);
    }

    // reset function
    const reset = () => {
        axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').then(res => {
            setData(res.data.pokemon);
        })
        setVal('');
    }

    // clean up data for filters
    const typeOne = mapDataType(data, 0);
    const typeTwo = mapDataType(data, 1);
    const weaknessOne = mapDataWeakness(data, 0);
    const weaknessTwo = mapDataWeakness(data, 1);
    const weaknessThree = mapDataWeakness(data, 2);
    const weaknessFour = mapDataWeakness(data, 3);
    const weaknessFive = mapDataWeakness(data, 4);
    const weaknessSix = mapDataWeakness(data, 5);
    const weaknessSeven = mapDataWeakness(data, 6);

    const cleanedTypeOne = removeDuplicates(typeOne);
    const cleanedTypeTwo = removeDuplicates(typeTwo).filter(e => e !== undefined);

    const cleanedWeaknessOne = removeDuplicates(weaknessOne);
    const cleanedWeanessTwo = removeDuplicates(weaknessTwo).filter(e => e !== undefined);
    const cleanedWeaknessThree = removeDuplicates(weaknessThree).filter(e => e !== undefined);
    const cleanedWeaknessFour = removeDuplicates(weaknessFour).filter(e => e !== undefined);
    const cleanedWeaknessFive = removeDuplicates(weaknessFive).filter(e => e !== undefined);
    const cleanedWeaknessSix = removeDuplicates(weaknessSix).filter(e => e !== undefined);
    const cleanedWeaknessSeven = removeDuplicates(weaknessSeven).filter(e => e !== undefined);

    const filteredType = removeDuplicates([...cleanedTypeOne, ...cleanedTypeTwo]);
    const filteredWeakness = removeDuplicates([
        ...cleanedWeaknessOne,
        ...cleanedWeanessTwo,
        ...cleanedWeaknessThree,
        ...cleanedWeaknessFour,
        ...cleanedWeaknessFive,
        ...cleanedWeaknessSix,
        ...cleanedWeaknessSeven
    ]);

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
                </table>
            </div>
        </div>
    )
}

export default PokedexTable;