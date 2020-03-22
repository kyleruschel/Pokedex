import React, { useState, useEffect } from 'react';
import './Table.css';

const Table = ({ data, setSearch, onClick, val }) => {
    const [tableData, setTableData] = useState();

    useEffect(() => {
        setTableData(data);
    }, [data]);

    return (
        <div className='rootContainer'>
            <div className='headerContainer'>
                <div>
                    <h1>Pokédex Table</h1>
                    <div className='searchContainer'>
                        <input type='text' value={val || ''} onChange={e => setSearch(e.target.value)} />
                        <button onClick={onClick}>Clear Search</button>
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
                        {tableData && tableData.map((e, i) => (
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