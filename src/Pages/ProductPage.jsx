import { useEffect, useState } from 'react';


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
          <li key={currentProduct._id}>{currentProduct.Name}
          <image src = {currentProduct.Image}  />
          <h3>{currentProduct.Year}</h3>
          <p>{currentProduct.Condition}</p>
          <p>{currentProduct.Location}</p>
          </li>

        ))}
      </ul>
    </>
  )
}

export default AllProductPage;
