import React, { useState } from 'react'

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (credentials.username && credentials.password) {
      alert('Login successful!')
      console.log('Logged in user:', credentials)
    } else {
      alert('Please enter both username and password.')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login