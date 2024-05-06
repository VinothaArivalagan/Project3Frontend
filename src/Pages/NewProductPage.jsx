import { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../Context/SessionContext';

const AddProduct = () => {
  const { tokenWith } = useContext(SessionContext)

  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [condition, setCondition] = useState('')
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [added, setAdded] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('name', name);
    formData.append('year', year);
    formData.append('condition', condition);
    formData.append('image', image); // Append the image file
    formData.append('location', location);

    await tokenWith('/products', 'POST', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
      },
    })
    setAdded(true);

  }

  useEffect(() => {
    tokenWith('/products')
  }, [tokenWith])

  const handleImageChange = event => {
    const file = event.target.files[0];
    setImage(file);
  };

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
          <input type = "file" onChange={handleImageChange} accept = "image/*" required/>
        </label>
        <label>
          Location
          <input value={location} onChange={event => setLocation(event.target.value)} required/>
        </label>
        <button type='submit'>Add Product</button>
      </form>
      {added && (
      <div style={{ textAlign: 'center' }}>
        <p> Product added to the  list successfully.</p></div>
      )}
    </>
  )
}

export default AddProduct;
