import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


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
      <h1>All Categories</h1>
      <ul>
        {products.map(currentProduct => (
          <li key={currentProduct._id}>{currentProduct.name}
          <image src = {currentProduct.image}  />
          <h3>{currentProduct.year}</h3>
          <p>{currentProduct.condition}</p>
          <p>{currentProduct.location}</p>
          </li>
           ))}
          <li>
          <Link to='/products/new'>NewProduct</Link>
          </li>

       
      </ul>
    </>
  )
}

export default AllProductPage;
