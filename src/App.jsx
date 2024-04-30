import {Routes, Route} from 'react-router-dom'
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import './App.css';


function App() {
  return <>
  <Routes>
    <Route path = '/' element={<h1>Welcome to Home Page</h1>} />
    <Route path = '/signup' element={<SignupPage />} />
    <Route path = '/login' element={<LoginPage />} />
    <Route path = '*' element ={<h1>404 Page</h1> } />
  </Routes>
  </>
}

export default App;
