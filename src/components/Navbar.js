import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobibleMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            ANIMEMORY
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobibleMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='about' className='nav-links' onClick={closeMobibleMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='game' className='nav-links' onClick={closeMobibleMenu}>
                Game
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
