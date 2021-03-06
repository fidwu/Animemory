import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MemoryGame from './pages/Game';
import Home from './pages/Home';
import Instructions from './components/Instructions';
import Team from './components/Team';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/game' component={MemoryGame} exact />
          <Route path='/' component={Home} exact />
          <Route path='/instructions' component={Instructions} exact />
          <Route path='/team' component={Team} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
