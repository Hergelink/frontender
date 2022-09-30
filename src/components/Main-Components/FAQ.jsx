import React from 'react';
import '../Styles/FAQ.css';
import { Link } from 'react-router-dom';

function FAQ() {
  return (
    <div className='main-faq-div'>
      <h1>Frequently Asked Questions</h1>
      <div className='faq-card'>
        <div className='faq-card-question'>
          <h3>What is Frontender?</h3>
        </div>
        <div className='faq-card-answer'>
          <p>
            Frontend Practice is a curated collection of real-world websites
            that developers can replicate to improve and test their skills. We
            believe our restructured approach will teach us a wide variety of
            skills, including design, interaction, animation, troubleshooting,
            and responsiveness.
          </p>
        </div>
      </div>

      <div className='faq-card'>
        <div className='faq-card-question'>
          <h3>Can I use these in my portfolio?</h3>
        </div>
        <div className='faq-card-answer'>
          <p>
            We'd want to challenge you to add your unique style to these
            projects by selecting your own images, text, and color schemes.
            Please note that these projects are "unofficial" if you do choose to
            utilize them for a piece for your portfolio. All resources owned by
            businesses and people whose websites are presented on Frontender are
            just for practice purposes.
          </p>
        </div>
      </div>

      <div className='faq-card'>
        <div className='faq-card-question'>
          <h3>Can I suggest a website for Frontend Practice to feature?</h3>
        </div>
        <div className='faq-card-answer'>
          <p>
            Of course! Feel free to <Link to='/contact'>contact us</Link> and
            share a website that you feel offers a learning opportunity by
            recreating. We will check it out and consider it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
