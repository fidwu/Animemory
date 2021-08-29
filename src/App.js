import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MemoryGame from './pages/Game';
import Home from './pages/Home';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Switch>
          <Route path='/game' component={MemoryGame} exact />
          <Route path='/' component={Home} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
