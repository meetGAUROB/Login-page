import React, { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        //
    }
  return (
    <div>
        <h2>Log in</h2>
        <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Username'
        />
        {" "}
        <input type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login