import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pokedex.css';
import Table from '../../Components/Table';

const Pokedex = () => {
  return (
    <div className='mainRoot'>
      <Table />
    </div>
  )
}

export default Pokedex;