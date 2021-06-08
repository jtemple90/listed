import React from 'react'
import ListingItem from '../ListingItem/ListingItem'
import { useSelector } from 'react-redux'
import './ListingList.css'

function ListingList() {
  let listings = useSelector(state=>state)
  return (
    <div className='listings-list'>
      {listings.map((listing) => {
        return <ListingItem key={listing.id} listing={listing}/>
      })}
    </div>
  )
}

export default ListingList
