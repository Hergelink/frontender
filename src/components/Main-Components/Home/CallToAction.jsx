import React from 'react'
import '../../Styles/Main.css';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div id='call-to-action'>
        <h3>Start Cloning and improve your Front-end experience</h3>
           <Link to='projects'><button>Get Started</button></Link>
    </div>
  )
}

export default CallToAction