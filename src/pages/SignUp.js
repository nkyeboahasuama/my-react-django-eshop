import React from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

const SignUp = () => {
  const { userRegisteration,newUser, newPass, newEmail, setNewPass, setNewUser, setNewEmail } = useContext(AuthContext)

  return (
    <div className='login'>
      <div className='login-container'>
        <form className='login-form' onSubmit={userRegisteration}> 
          <label>Username:</label>
            <input
                type="text"
                value={newUser}
                onChange={(event) => setNewUser(event.target.value)}
            />

            <label>Password:</label>
            <input
                type="password"
                value={newPass}
                onChange={(event) => setNewPass(event.target.value)}
            />

            <label>Email:</label>
            <input
                type="email"
                value={newEmail}
                onChange={(event) => setNewEmail(event.target.value)}
            />
        <button type='submit'>SignUp</button>
        </form>
          
      </div>
    </div>
  )
}

export default SignUp