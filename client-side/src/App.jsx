import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegistrationForm from './pages/RegistrationForm'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' Component={LandingPage} />
    <Route path='/registrationForm' Component={RegistrationForm} />

   </Routes>
   </BrowserRouter>
  )
}

export default App
