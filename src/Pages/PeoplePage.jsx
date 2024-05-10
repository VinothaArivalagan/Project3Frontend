import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/People.css';


const PeoplePage = () => {
  const [volunteers, setVolunteers] = useState([])
  const navigate = useNavigate()

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

  const handleDelete = async (volunteerId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/volunteer/${volunteerId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // If the delete operation is successful, update the volunteer list by refetching the data
        fetchVolunteers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (volunteerId) => {
    navigate(`/volunteer/edit/${volunteerId}`);
  };

  useEffect(() => {
    fetchVolunteers()
  }, [])

  return (
    <>
        <div className="people">
          <h1>Volunteer</h1>
      <p>There are literally many volunteers who represent the passion and commitment 
        behind the scenes which enable The Freecycle Network™ to function as a grassroots and nonprofit 
        gifting movement. Here are some ways you can help.</p>
        
      <ul>
        {volunteers.map(currentVolunteer => (
                  <div className="volunteer">
          <li key={currentVolunteer._id}>
          <p><strong>Name: </strong>{currentVolunteer.name}</p>
          <p><strong>Age: </strong>{currentVolunteer.age}</p>
          <p><strong>Phone: </strong>{currentVolunteer.phone}</p>
          <p><strong>Email: </strong>{currentVolunteer.email}</p>
          <button className="edit" onClick={() => handleEdit(currentVolunteer._id)}>Edit</button>
          <button  onClick={() => handleDelete(currentVolunteer._id)}>Delete</button>
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
