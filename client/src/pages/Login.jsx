import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>登入</h1>
      <form>
        <input required type="text" placeholder='帳號' />
        <input required type="password" placeholder='密碼' />
        <button>登入</button>
        <p>這是錯的!</p>
        <span>還沒註冊帳號嗎？<Link to="/register">註冊</Link></span>
      </form>
    </div>
  )
}

export default Login
