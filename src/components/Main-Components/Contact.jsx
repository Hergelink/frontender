import React from 'react';
import Forms from './Forms';
import '../Styles/ContactForm.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div id='form-page-container'>
      <div className='form-container-div'>
        <div id='contact-info-div'>
          <h1>Contact us. 🦜</h1>
          <p>Feel free to contact us for your questions or recommendations.</p>
          <p>
            Visit the{' '}
            <Link to='/faq' id='link-to-faq'>
              FAQ
            </Link>{' '}
            page for frequently asked questions.
          </p>
        </div>
        <Forms />
      </div>
    </div>
  );
}

export default Contact;
