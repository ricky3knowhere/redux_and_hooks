import React, { useState, useEffect } from 'react';

import axios from 'axios'
import { useHistory } from 'react-router-dom';

function Login(){

  const [data, setData] = useState({email: '', password: ''});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory()

  useEffect(() => {
    axios.get('http://localhost:3000/users',)
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

  useEffect(() => {
    if(error === true){
      setTimeout(() => {
        setError(false)
        setErrorMessage('')
      }, 2000)
    }
  })


  async function login(){
    try {
      const response = await axios.post('http://localhost:3000/login', data)

      if(response.status === 200){
        history.push('/home')
      }
    } catch(e) {
    console.log(e.response.data);
    setErrorMessage(e.response.data)
    setError(true)
  }
}
  return (
    <div>
      <h2>Form Login</h2>
      <form>
        { error && errorMessage}
        Email : <input name="email" onChange={getEmail} /><br /><br />
        password : <input name="password" onChange={getPassword} /><br /><br />
        <button type="button" onClick={login}>Login</button>
      </form>
    </div>
  )
}

export default Login