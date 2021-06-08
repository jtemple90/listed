import React , { useState}from 'react'
import { useDispatch } from 'react-redux'
import './ListingItem.css'
import Listing from '../../../images/Listing.jpg'
import { deleteListing, updateListing } from '../../../redux/actions';



function ListingItem({ listing }) {
    const [editable, setEditable] = useState(false)
    const [title, setTitle] = useState(listing.title)
    const [address, setAddress] = useState(listing.address)
    const [price, setPrice] = useState(listing.price)
    const [image, setImage] = useState(listing.image)
    let dispatch = useDispatch()
  return (
    <div className='listing-container'>
<div className="item-image">{editable ?
        <input type="image" alt='' className="listing-image"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          />
          :
          <div><img className='image' src={listing.image} alt="" /></div>}
          </div>
    

        <div className="listItem-container">
      {editable ?
        <input type="text" className="listing-title form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        :
        <h2 className='listing-header'>{listing.title}</h2>}
        

        <div className="listing-info">
         <div className="item-address">{editable ?
            <input type="text" className="listing-address form-control"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              />
              :
              <p>{listing.address}</p>}</div>
        <div className="item-price">{editable ?
          <input type="number" className="listing-price form-control"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            />
            :
            <p>${listing.price}</p>}</div>
  
        <div className="item-id">#{listing.id.length > 1 ? listing.id[2] : listing.id}</div>
    </div>
         </div>
        <div className="listing-btns">
          <button 
            className='listing-edit' 
            onClick={() => {
                        dispatch(updateListing({
                            ...listing,
                            title: title,
                            address: address,
                            price:price,
                            image:image
                        }))
                        if(editable) {
                         setTitle(listing.title);   
                         setAddress(listing.address);   
                         setPrice(listing.price);   
                         setImage(listing.image);   
                        }
                        setEditable(!editable);
                      

                    }}>{editable?"Update":"Edit"}
                    </button>
          <button 
            className='listing-delete'
              onClick={() => dispatch(deleteListing(listing.id))}
            >Delete</button>
        </div>
      
      </div>
  )
}

export default ListingItem
