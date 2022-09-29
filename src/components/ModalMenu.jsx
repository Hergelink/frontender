import React from 'react'
import { Link } from 'react-router-dom';

function ModalMenu({handleMenu}) {
 


  

  return (
    <div id='modal-container' >
        <div id='modal' >
          <ul>
            <li><Link to='/' onClick={handleMenu}>🏠 Home</Link></li>
            <li><Link to='/projects' onClick={handleMenu}>🚧 Projects</Link></li>
            <li><Link to='/faq' onClick={handleMenu}>❓ FAQ</Link></li>
            <li><Link to='/contact' onClick={handleMenu}>📩 Contact</Link></li>
          </ul>
        </div>
      </div>
  )
}

export default ModalMenu