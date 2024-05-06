import { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../Context/SessionContext';


const AddPeople = () => {
  const { withToken } = useContext(SessionContext)

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState();
  const [added, setAdded] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault()
    const payload = {name, age, phone, email}

    await withToken('/volunteer', 'POST', payload)
    setAdded(true);
  }

  useEffect(() => {
    withToken('/volunteer')
  }, [])

  return (
    <>
    <h1>Please add you details for Volunteering</h1>
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
      {added && (
      <div style={{ textAlign: 'center' }}>
        <p> People added to the Volunteer list.</p></div>
      )}
    </>
  )
}

export default AddPeople;
    