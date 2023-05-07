import React from 'react'
import { useState } from 'react'
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json();

    if (data.user) {
      localStorage.setItem('token', data.user)
      alert('Login sucessful')
      window.location.href = "/dashboard"
    } else {
      alert('Please check your username and password')
    }

    console.log (data)
  }

  return (
    <div className="wrapper gradient-outline">
      <class className="form-box login">
            <h2>Login</h2>
            <form onSubmit={loginUser}>
            <div className="input-box">
                <span className="icon"><ion-icon name="mail"></ion-icon></span>
                <input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email" 
                  required/>
                <label>Email</label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password" 
                  required/>
                <label>Password</label>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="login-register">
                <p>Don't have an account? <a href="/Register" className="register-link">Register</a></p>
            </div>
            </form>
        </class>
        
    </div>
  );
}

export default Login;