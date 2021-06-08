import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)


  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  
  return (
    <div>
      <nav className='navbar'>
      <div className="navbar-container">
        <Link to="/" className='navbar-logo'><i class="fas fa-home"></i>LISTED

</Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/listings' className='nav-links' onClick={closeMobileMenu}>
            LISTINGS
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
            DASHBOARD
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
            SIGN IN
          </Link>
        </li>
        
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
