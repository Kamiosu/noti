import React from 'react'
import {useState} from 'react'
import './Login.css'

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [social, setSocial] = useState('')

  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        name,
        social,
        email,
        password
      })
    })

    const data = await response.json();
    console.log('yes')
    console.log (data)
    if (data.status==="ok") {
      window.location.href = '/login'
    }
  }

  return (
    <div className="wrapper">
       <class className="form-box register">
            <h2>Registration</h2>
            <form onSubmit={registerUser}>
            <div className="input-box">
                <span className="icon"><ion-icon name="person"></ion-icon></span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                  type="text" 
                  required/>
                <label>Username</label>
            </div>
            <div className="input-box">
                <span className="icon"><ion-icon name="mail"></ion-icon></span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}         
                  type="email" 
                  required/>
                <label>Email</label>
            </div>
            <div className="input-box">
                <input
                  value={social}
                  onChange={(e) => setSocial(e.target.value)}         
                  type="text" 
                  required/>
                <label>Social Media Link</label>
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
            <button type="submit" className="btn">Register</button>
            </form>
            <div className="login-register">
                <p>Already have an account? <a href="/Login" className="login-link">Login</a></p>
            </div>
        </class>
    </div>
  );
}

export default Register;