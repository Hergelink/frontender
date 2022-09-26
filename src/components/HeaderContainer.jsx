import React, { useState } from 'react';
import ModalMenu from './ModalMenu';
import { Link } from 'react-router-dom';

function HeaderContainer() {
  const [menu, SetMenu] = useState(false);

  const handleMenu = () => {
    SetMenu(!menu);
  };

  return (
    <div id='header-container'>
      <Link to='/' id='site-logo'>
        Frontender
      </Link>

      <div id='hamburger-menu' onClick={handleMenu}>
        <span className='menu-bar'></span>
        <span className='menu-bar'></span>
        <span className='menu-bar'></span>
      </div>
      <nav id='desktop-nav'>
        <ul id='desktop-menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li>
            <Link to='contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      {menu && (
        <ModalMenu handleMenu={handleMenu} menu={menu} SetMenu={SetMenu} />
      )}
    </div>
  );
}

export default HeaderContainer;
