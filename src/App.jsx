import {Routes, Route} from 'react-router-dom'
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import Products from '../src/Pages/ProductPage';
import NewProduct from './Pages/NewProductPage'

import './App.css';


function App() {
  return <>
        <Navbar />
  <Routes>
  <Route path = '/' element={<HomePage />} />
    <Route path = '/signup' element={<SignupPage />} />
    <Route path = '/login' element={<LoginPage />} />
    <Route path = '/products' element={<Products />} />
    <Route path = '/products/new' element={<NewProduct />} />
    <Route path = '*' element ={<h1>404 Page</h1> } />
  </Routes>
  </>
}

export default App;
