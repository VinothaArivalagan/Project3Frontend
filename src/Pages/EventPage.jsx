import { useEffect, useState } from 'react'

const EventPage = () => {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/event`)
      if (response.ok) {
        const eventsData = await response.json()
        console.log(eventsData)
        setEvents(eventsData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <>
      <h1>Here, the Upcoming Events</h1>
      <ul>
        {events.map(currentEvents => (
          <li key={currentEvents._id}>{currentEvents.Name}
          <h3>{currentEvents.Venue}</h3>
          <p>{currentEvents.Date}</p>
          <p>{currentEvents.Time}</p>
          <p>{currentEvents.OrganizedBy}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default EventPage;
