import React from 'react'
import { Link } from 'react-router-dom'



function Card(props) {
  return (
    <>
      <li className="cards-item">
        <Link className='cards-item_link'>
          <figure className="cards-item_pic-wrap" data-category={props.label}>
            <img src={props.src} alt="" className='cards-item_img' />
          </figure>
          <div className="cards-item_info">
            <h5 className="cards-item_txt">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}export default Card