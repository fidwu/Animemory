import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { Button } from './Button';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>ANIMEMORY</h1>
      <p>
        This is a memory card game to help young children improve their visual
        recognition, short-term memory, and attention skills. Players must match
        as many pairs of cards before the timer runs out!
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PLAY GAME
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          HOW TO PLAY <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  );
}
export default HeroSection