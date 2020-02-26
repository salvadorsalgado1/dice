import React from 'react';
import Home from './components/Home';
import './App.css';
import { Route, Switch, HashRouter} from 'react-router-dom';
import Dice from './components/Dice';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <div className = "Title">
 
      <HashRouter>
      <Switch>
      <Route exact from ={"/"} component = {Home}></Route>

      <Route path = {"/dice"} component = {Dice}></Route>
      <Route path = {"/about"} component = {About}></Route>

      </Switch>
      </HashRouter>
     
      </div>
    </div>
  );
}

export default App;
