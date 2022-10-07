import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/ErrorPage.css"

function ErrorPage() {
  return (
    <div className='error-page-container'>
      <div className="error-info-container">
      <div className="err-emoji-div">🤔</div>
      <h1>Page not found</h1>
      <p>The page you are trying to access does not exist. Maybe the buttons bellow can help.</p>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default ErrorPage