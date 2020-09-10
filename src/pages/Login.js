import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Login(){

  const [data, setData] = useState({email: '', password: ''});
  useEffect(() => {
    axios.get('http://localhost:4000/users',)
  }, [])

  function getEmail(e){
    setData((data) => {
      data.email = e.target.value
      return data
    })
  }

  function getPassword(e){
    setData((data) => {
      data.password = e.target.value
      return data
    })
  }

  function login(){
    axios.post('http://localhost:4000/login', data)
  }
  return (
    <div>
      <h2>Form Login</h2>
      <form>
        Email : <input name="email" onChange={getEmail} /><br /><br />
        password : <input name="password" onChange={getPassword} /><br /><br />
        <button type="button" onClick={login}>Login</button>
      </form>
    </div>
  )
}

export default Login