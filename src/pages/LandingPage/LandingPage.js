import React from 'react'
// import HeroImg from '../../images/HeroImg.jpg'
import { Link } from 'react-router-dom'
import FeaturedHomes from '../../components/FeaturedHomes/Cards'
import './Landing.css'

const LandingPage = () => {
  return (
    <>  
    <div className="hero-container">
    <div className="inner-txt">
       <h1>YOUR NEW HOME AWAITS!</h1>
      <p>FIND YOUR NEXT HOME.</p>
      <div className="hero-btns">
        <Link to='/listings'>
          <button className='login'>AVAILABLE HOMES</button>
        </Link>
      </div>
    </div>
    <div className="featured">
      <FeaturedHomes/>
    </div>
     
    </div>
    </>
  )
}

export default LandingPage
