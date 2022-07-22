import  React, { useContext }   from 'react';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { Routes,Route,} from "react-router-dom"
import { AuthContext } from './context/AuthContext';
function App() {
  const {user} = useContext(AuthContext)
  return(
    
    <Routes> 
    <Route exact path="/" element={user ?  <Home /> : <Login/>} />
      
    <Route path="login" element={  <Login />} />
    <Route path="register" element={  <Register />} />
    <Route path="profile/:username" element={<Profile />} />
  </Routes>
   
   )
}

export default App;
