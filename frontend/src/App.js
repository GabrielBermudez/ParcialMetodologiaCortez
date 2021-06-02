import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import ListaPeliculas from './components/ListaPeliculas';
import AgregarPelicula from './components/AgregarPelicula';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/lista-peliculas" component={ListaPeliculas} ></Route>
        <Route exact path="/agregar-pelicula" component={AgregarPelicula} ></Route>
      </Switch>
    ) 
  }
}

export default App;
