import React, { useState } from 'react';
import axios from 'axios'

function Register(){

  const [data, setData] = useState({email: '', password: ''});

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

  function register(){
    axios.post('http://localhost:4000/register', data)
  }
  return (
    <div>
      <h2>Form Register</h2>
      <form>
        Email : <input name="email" onChange={getEmail} /><br /><br />
        password : <input name="password" onChange={getPassword} /><br /><br />
        <button type="button" onClick={register}>Register</button>
      </form>
    </div>
  )
}

export default Register