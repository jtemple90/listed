import React from 'react'
import ListingList from '../../components/realtorListings/ListingsList/ListingList'
import './Listings.css'

const Listings = () => {
  return (
    <div className='listings-page-container'>
      <h1>Our Active Listings</h1>
      <div className="listing-page-list">

      <ListingList/>
      </div>
    </div>
  )
}

export default Listings