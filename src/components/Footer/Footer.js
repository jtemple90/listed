import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-contact">
        <div className="footer-contact-heading">
          <p>Contact us about one of our properties</p>
        </div>
        <div className="input-areas">
          <form>
            <input 
              type="text"
              name='name'
              placeholder='Your First Name'
              className='footer-input'
            />
            <input 
              type="email"
              name='email'
              placeholder='Your Email'
              className='footer-input'
            />
            <button className='footer-btn'>Contact Us</button>
          </form>
        </div>
      </section>
     
    </div>
  )
}

export default Footer
