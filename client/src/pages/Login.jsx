import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })
  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("/auth/login", inputs)
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  }

  return (
    <div className='auth'>
      <h1>登入</h1>
      <form>
        <input required type="text" placeholder='帳號' name='username' onChange={handleChange} />
        <input required type="password" placeholder='密碼' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>登入</button>
        {err && <p>{err}</p>}
        <span>還沒註冊帳號嗎？<Link to="/register">註冊</Link></span>
      </form>
    </div>
  )
}

export default Login
