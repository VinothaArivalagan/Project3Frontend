import { useEffect, useState } from 'react'

const PeoplePage = () => {
  const [volunteers, setVolunteers] = useState([])

  const fetchVolunteers = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/volunteer`)
      if (response.ok) {
        const volunteersData = await response.json()
        setVolunteers(volunteersData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchVolunteers()
  }, [])

  return (
    <>
      <h1>Please add you details for Volunteering</h1>
      <ul>
        {volunteers.map(currentVolunteers => (
          <li key={currentVolunteers._id}>{currentVolunteers.name}</li>
        ))}
      </ul>
    </>
  )
}

export default PeoplePage;
