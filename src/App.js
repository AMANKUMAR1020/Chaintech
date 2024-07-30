import './App.css'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Register from './Components/Register'
import Profile from './Components/Profile'
import EditProfile from './Components/EditProfile'

export default function App() {
  return (
    <Routes>
      <Route index element={<Dashboard/>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />}/>

      {/* myprofile */}
      <Route path="/profile" element={<Profile />}/>
      <Route path="/edit" element={<EditProfile />}/>
      

    </Routes>
  )
}
