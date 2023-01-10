import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>註冊</h1>
      <form>
        <input required type="text" placeholder='帳號' />
        <input required type="email" placeholder='信箱' />
        <input required type="password" placeholder='密碼' />
        <button>註冊</button>
        <p>這是錯的!</p>
        <span>已經有帳號了嗎？<Link to="/login">登入</Link></span>
      </form>
    </div>
  )
}

export default Register
