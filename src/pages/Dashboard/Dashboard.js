import React from 'react'
import ListingInput from '../../components/realtorListings/ListingInput/ListingInput'
import ListingList from '../../components/realtorListings/ListingsList/ListingList'
import UserCard from '../../components/UserCard/UserCard'
import './Dashboard.css'



const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
      <section className="dashboard-user">
        <UserCard className='dashboard-userCard'/>
      </section> 
      {/* Listings Section */}
        <section className="dashboard-listings">
        <ListingInput className='dashboard-input'/>
        <ListingList className='dashboard-listing'/> 
        </section>
      </div>
    </div>
      
        
     
  )
}

export default Dashboard
