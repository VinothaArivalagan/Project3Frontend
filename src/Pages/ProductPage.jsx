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
    <div className="wrapper"></div>
      <h1>All Categories</h1>
      <ul>
        {products.map(currentProduct => (
          <div className="coursed">
          <li key={currentProduct._id}><strong>Name: </strong>{currentProduct.name}
          <image src = {currentProduct.image}  />
          <h3><strong>Year: </strong> {currentProduct.year}</h3>
          <p><strong>Condition: </strong> {currentProduct.condition}</p>
          <p><strong>Location: </strong>{currentProduct.location}</p>
          </li></div>
           ))}
          <li>
          <Link to='/products/new'>NewProduct</Link>
          </li>

       
      </ul>
    </>
  )
}

export default AllProductPage;
