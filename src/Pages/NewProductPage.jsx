import { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../Context/SessionContext';

const AddProduct = () => {
  const { withToken } = useContext(SessionContext)

  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [condition, setCondition] = useState('')
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  const handleSubmit = async event => {
    event.preventDefault()
    const payload = {name, year, condition, image, location  }

    withToken('/products', 'POST', payload)
  }

  useEffect(() => {
    withToken('/products')
  }, [])

  return (
    <>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={event => setName(event.target.value)} required />
        </label>
        <label>
          Year
          <input value={year} onChange={event => setYear(event.target.value)} required />
        </label>
        <label>
          Condition
          <input value={condition} onChange={event => setCondition(event.target.value)} required/>
        </label>
        <label>
          Image
          <input value={image} onChange={event => setImage(event.target.value)} required/>
        </label>
        <label>
          Location
          <input value={location} onChange={event => setLocation(event.target.value)} required/>
        </label>
        <button type='submit'>Add Product</button>
      </form>
    </>
  )
}

export default AddProduct;
