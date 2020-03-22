import React, { useState, useEffect } from 'react';
import './Table.css';

const Table = props => {
    const [tableData, setTableData] = useState();

    useEffect(() => {
        setTableData(props.data);
    }, [props.data]);

    return (
        <div className='rootContainer'>
            <div className='headerContainer'>
                <div>
                    <h1>Pokédex Table</h1>
                    <div className='searchContainer'>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Pokemon Search"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder='Search a name here'
                        />
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
                                <td>
                                    <img src={e.img}
                                        className='pokemonImage'
                                        height='60px'
                                        width='60px'
                                        alt={e.name} />
                                </td>
                                <td className='pokemonType'>
                                    {e.type.join(' - ')}
                                </td>
                                <td className='pokemonWeaknesses'>
                                    {e.weaknesses.join(' - ')}
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