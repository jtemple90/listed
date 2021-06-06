import React from 'react'
import Card from './HomeCard/Card'
import './Cards.css'
import Listing1 from '../../images/Listing1.jpg'
import Listing2 from '../../images/Listing2.jpg'
import Listing3 from '../../images/Listing3.jpg'

function Cards() {
  return (
    <div className='cards'>
    <h1>OUR FEATURED PROPERTIES!</h1>
    <div className="cards-container">
      <div className="cards-wrapper">
        <ul className="cards-items">
          <Card
            src={Listing1}
            text='$315,000 - Phoenix, AZ'
            label='4Bd/3Br 2100s/ft'
          /> 
          <Card
            src={Listing2}
            text='$1.2mil - Scottsdale, AZ'
            label='4Bd/5Br 3750s/ft'
          /> 
          <Card
            src={Listing3}
            text='$505,000 - Phoenix, AZ'
            label='6Bd/4Br 3100s/ft'
          /> 
        </ul>
      </div>
    </div>
      
    </div>
  )
}

export default Cards
