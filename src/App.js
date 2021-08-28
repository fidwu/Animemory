import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MemoryGame from './pages/Game';
import HomePage from './pages/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/game" component={MemoryGame} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
