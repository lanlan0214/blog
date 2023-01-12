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
          <Link className='link' to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <Link className='link' to="/?cat=learn">
            <h6>LEARN</h6>
          </Link>
          <Link className='link' to="/?cat=game">
            <h6>GAME</h6>
          </Link>
          <Link className='link' to="/?cat=project">
            <h6>PROJECT</h6>
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
