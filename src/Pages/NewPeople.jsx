import { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../Context/SessionContext';


const AddPeople = () => {
  const { withToken } = useContext(SessionContext)

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState();
  const [date, setDate] = useState();

  const handleSubmit = async event => {
    event.preventDefault()
    const payload = {name, age, phone, email, date  }

    tokenWith('/volunteer', 'POST', payload)
  }

  useEffect(() => {
    withToken('/volunteer')
  }, [])

  return (
    <>
      <h1>Add People</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={event => setName(event.target.value)} required />
        </label>
        <label>
          Age
          <input value={age} onChange={event => setAge(event.target.value)} required />
        </label>
        <label>
          Phone
          <input value={phone} onChange={event => setPhone(event.target.value)} required/>
        </label>
        <label>
          Email id
          <input value={email} onChange={event => setEmail(event.target.value)} required/>
        </label>
        <button type='submit'>Add People</button>
      </form>
    </>
  )
}

export default AddPeople;
    