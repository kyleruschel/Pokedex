import React from 'react';
import Landing from './Pages/Landing/Landing';
import Pokedex from './Pages/Pokedex/Pokedex';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='App'>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/pokedex' component={Pokedex} />
    </Switch>
    </div>
  );
}

export default App;
