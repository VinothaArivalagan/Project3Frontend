import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const PeoplePage = () => {
  const [volunteers, setVolunteers] = useState([])

  const fetchVolunteers = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/volunteer`)
      if (response.ok) {
        const volunteersData = await response.json()
        console.log(volunteersData)
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
        {volunteers.map(currentVolunteer => (
          <li key={currentVolunteer._id}>{currentVolunteer.name}
          <p>{currentVolunteer.age}</p>
          <p>{currentVolunteer.phone}</p>
          <p>{currentVolunteer.email}</p>
          
          </li>
            ))}
          <li>
          <Link to='/volunteer/new'>AddPeople</Link>
        </li>
      
      </ul>
    </>
  )
}

export default PeoplePage;
