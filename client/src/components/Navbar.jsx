import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className='link' to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className='link' to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className='link' to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className='link' to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <span>Frank</span>
          <span>登出</span>
          <span className='write'>
            <Link className='link' to="/write">發文</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
