import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import Logo from '../img/logo.png'

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
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
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={logout}>登出</span> : <Link className='link' to="/login">登入</Link>}
          <span className='write'>
            <Link className='link' to="/write">發文</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
