import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleSubmit = async event => {
    event.preventDefault()
    console.log(name, username, password)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username, password }),
      })
      if (response.status === 201) {
        const newUser = await response.json()
        console.log(newUser)
        navigate('/login')
      } else if (response.status === 400) {
        const error = await response.json()
        console.log(error)
        throw new Error(error.message)
      }
    } catch (error) {
      console.log(error)
      setErrorMessage(error.message)
    }
  }

  return (
    <>
      <h1>Signup</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
      <label>
          Name
          <input value={name} onChange={event => setName(event.target.value)} required />
        </label>
        <label>
          Username
          <input value={username} onChange={event => setUsername(event.target.value)} required />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
            type='password'
          />
        </label>
        <button type='submit'>Sign Up</button>
      </form>
    </>
  )
}

export default SignupPage;
