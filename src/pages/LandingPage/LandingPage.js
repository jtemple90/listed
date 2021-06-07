import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedHomes from '../../components/FeaturedHomes/Cards'
import Footer from '../../components/Footer/Footer'
import './Landing.css'

const LandingPage = () => {
  return (
    <>  
    <div className="hero-container">
    <div className="inner-txt">
       <h1>YOUR NEW HOME AWAITS!</h1>
      <p>LET US HELP YOU FIND YOUR NEXT HOME.</p>
      <div className="hero-btns">
        <Link to='/listings'>
          <button className='landing-btn'>AVAILABLE HOMES</button>
        </Link>
      </div>
    </div>
    <div className="featured">
      <FeaturedHomes/>
    </div>
     <Footer/>
    </div>
    
    </>
  )
}

export default LandingPage
