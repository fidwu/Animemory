import React from 'react';
import './Instructions.css';

const Instructions = () => {
  return (
    <div className='instructions-wrapper'>
      <div className='row'>
        <div className='column'>
          <div className='column1'>
            <h1>How To Play</h1>
            <ol>
              <li>
                Start by clicking on a card. An image or text will appear.
              </li>
              <li>
                Then try to find a card with an image or text that matches the
                card you flipped.
              </li>
              <li>
                If you can't find a pair, the flipped cards will be flipped back
                with the face down and a strike will be added against you.
              </li>
              <li>After 5 tries, the game will restart.</li>
            </ol>
            </div>
          </div>
          <div className='column'>
            <div className='column2'>
              <div className='img-wrap'>
                <img src="images/svg1.png" alt="man on phone"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Instructions


