import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/Logo.png'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)


  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  
  return (
    <div>
      <nav className='navbar'>
      <div className="navbar-container">
        <Link to="/" className='navbar-logo'><img src={Logo} className='navbar-logo_image' alt='' /></Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/listings' className='nav-links' onClick={closeMobileMenu}>
            Listings
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
            Sign In
          </Link>
        </li>
        
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
