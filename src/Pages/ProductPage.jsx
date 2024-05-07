import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Product.css';



const AllProductPage = () => {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      if (response.ok) {
        const productsData = await response.json()
        console.log(productsData)
        setProducts(productsData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
    <div className="shop">
    <div className="shopTitle">
      <h1>All Categories</h1>
      <ul>
        {products.map(currentProduct => (
          
          <li key={currentProduct._id}><strong>Name: </strong>{currentProduct.name}
          <img src = {currentProduct.image}  />
          <h3><strong>Year: </strong> {currentProduct.year}</h3>
          <p><strong>Condition: </strong> {currentProduct.condition}</p>
          <p><strong>Location: </strong>{currentProduct.location}</p>
          <p><strong>Phone: </strong>{currentProduct.phone}</p>
          </li>
           ))}
          <div className='new'>
          <Link to='/products/new'>NewProduct</Link>
          </div>
         
       
      </ul>
      </div></div>
    </>
  )
}

export default AllProductPage;
