import React from 'react'
import { Link } from 'react-router-dom'
import ProfileImg from '../../images/ProfileImg.jpg'
import './UserCard.css'

function UserCard() {
  return (
    <div className='user-card'>
    <div className="user-card-container">
      <div className="profile-image">
        <img src={ProfileImg} alt="" />
      </div>
        <h1 className="user-name">John Doe</h1>
      <div className="user-data">
        <p className="user-info">No Name Realty</p>
        <p className="user-info">email@email.com</p>
        <p className="user-info">(123)456-7890</p>
        <p className="user-info">123 Main St. City, AZ 12345</p>
      </div>
      <div className="user-social">
        <li className='social-icons'>
          <Link className='social-icon' to='/dashboard'>
            <i class="fab fa-instagram"></i>
          </Link>
        </li>
        <li className='social-icons'>
          <Link className='social-icon' to='/dashboard'>
            <i class="fab fa-linkedin-in"></i>
          </Link>
        </li>
        <li className='social-icons'>
          <Link className='social-icon' to='/dashboard'>
            <i class="fab fa-twitter"></i>
          </Link>
        </li>
         
          
       
       
      </div>
    </div>
    </div>
  )
}

export default UserCard
