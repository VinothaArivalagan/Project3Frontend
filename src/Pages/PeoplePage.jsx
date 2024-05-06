import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/People.css';


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
        <div className="people">

      <h1>Please add you details for Volunteering</h1>
      <ul>
        {volunteers.map(currentVolunteer => (
                  <div className="volunteer">

          <li key={currentVolunteer._id}><strong>Name: </strong>{currentVolunteer.name}
          <p><strong>Age: </strong>{currentVolunteer.age}</p>
          <p><strong>Phone: </strong>{currentVolunteer.phone}</p>
          <p><strong>Email: </strong>{currentVolunteer.email}</p>
          
          </li></div>
            ))}
          <div className='adding-container'>
          <Link className='adding' to='/volunteer/new'>AddPeople</Link>
        </div>
      
      </ul></div>
    </>
  )
}

export default PeoplePage;
