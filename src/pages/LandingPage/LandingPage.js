import React from 'react'
// import HeroImg from '../../images/HeroImg.jpg'
import { Link } from 'react-router-dom'
import './Landing.css'

const LandingPage = () => {
  return (
    <>  
    <div className="hero-container">
    <div className="inner-txt">
       <h1>YOUR NEW HOME AWAITS!</h1>
      <p>Find your next home.</p>
      <div className="hero-btns">
        <Link to='/listings'>
          <button className='login'>Available Homes</button>
        </Link>
      </div>
    </div>
     
    </div>
    </>
  )
}

export default LandingPage
