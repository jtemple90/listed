import React, { useState } from 'react'
import { addListing } from '../../../redux/actions'
import {v1 as uuid} from 'uuid'
import { useDispatch } from 'react-redux'
import './ListingInput.css'


function ListingInput() {
  let [title, setTitle] = useState()
  let [address, setAddress] = useState()
  let [price, setPrice] = useState()
  let [image, setImage] = useState()
  let dispatch = useDispatch()
  
  return (
    <div>
      
      <div className="listing-input-container">
      <div className="input-heading">
      <p>Enter Property Information</p>
      </div>
      <div className="inputs">

        <input className='listing-input' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Property Title'/>
        <input className='listing-input' type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter the address'/>
        <input className='listing-input' type="text" value={price} onChange={(e) => setPrice(e.target.value)}placeholder='Enter the price'/>
        {/* <input className='listing-input' type="file" alt='' value={image} onChange={(e) => setImage(e.target.value)}/> */}
        <button onClick={() => {
          dispatch(addListing({
            id: uuid(),
            title: title,
            address: address,
            price: price,
            image: image
          }))
          setTitle('')
          setAddress('')
          setPrice('')
          setImage('')
        }} className='listing-save-btn'>Add Listing</button>
      </div>
      </div>
    </div>
  )
}

export default ListingInput
