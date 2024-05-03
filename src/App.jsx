import {Routes, Route} from 'react-router-dom'
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import Products from '../src/Pages/ProductPage';
import NewProduct from './Pages/NewProductPage';
import Volunteer from '../src/Pages/PeoplePage';
import Event from '../src/Pages/EventPage';
import AddPeople from './Pages/NewPeople';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import LogOut from '../src/Pages/Logout';


function App() {
  return <>
        <Navbar />
  <Routes>
  <Route path = '/' element={<HomePage />} />
    <Route path = '/signup' element={<SignupPage />} />
    <Route path = '/login' element={<LoginPage />} />
    <Route path = '/products' element={<PrivateRoute><Products /></PrivateRoute>} />
    <Route path = '/products/new' element={<PrivateRoute> <NewProduct /> </PrivateRoute>} />
    <Route path = '/volunteer' element={<PrivateRoute><Volunteer /> </PrivateRoute>} />
    <Route path = '/event' element={<PrivateRoute><Event /> </PrivateRoute>} />
    <Route path = '/volunteer/new' element={<PrivateRoute> <AddPeople /> </PrivateRoute>} />
    <Route path = '/logout' element={<LogOut />} />
    <Route path = '*' element ={<h1>404 Page</h1> } />
  </Routes>
  </>
}

export default App;
