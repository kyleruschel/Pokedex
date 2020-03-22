import React from 'react';
import Landing from './Pages/Landing/Landing';
import PokedexTable from './Components/PokedexTable';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='App'>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/pokedexTable' component={PokedexTable} />
    </Switch>
    </div>
  );
}

export default App;
