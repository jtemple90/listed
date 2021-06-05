import React from 'react'
import HeroImg from '../../images/HeroImg.jpg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>  
    <div className="hero-container">
      <img src={HeroImg} alt="" />
      <h1>YOUR NEW HOME AWAITS!</h1>
      <p>Find YOur next home</p>
      <div className="hero-btns">
        <Link to='/listings'>
          <button className='login'>Available Homes</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default LandingPage
