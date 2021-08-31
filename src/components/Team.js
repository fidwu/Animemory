import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = () => {
  return (
    <div className='about-section'>
      <h1>Meet the Team</h1>
      <img src='images/svg2.png' alt='working'></img>
      <p>We are the creators behind the game Animemory.</p>

      <div className='row'>
        <div className='column'>
          <div className='container'>
            <h2> Fidella Wu</h2>
            <p>
              <a href='https://www.linkedin.com/in/fidella-w-23b90520b/'>
                <i class='fab fa-linkedin'></i>
              </a>
            </p>
            <p>
              <a href='https://github.com/fidwu'>
                <i class='fab fa-github-square'></i>
              </a>
            </p>
          </div>
        </div>

        <div className='column'>
          <div className='container'>
            <h2> Susana Marquna</h2>
            <p>
              <a href='https://www.linkedin.com/in/smarquina/'>
                <i class='fab fa-linkedin'></i>
              </a>
            </p>
            <p>
              <a href='https://github.com/smarquina37'>
                <i class='fab fa-github-square'></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
