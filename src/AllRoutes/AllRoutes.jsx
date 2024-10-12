import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import Properties from '../Pages/PropertiesPage'
import SignupPage from '../Pages/SignupPage'
import LoginPage from '../Pages/LoginPage'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <LandingPage/> } />
      <Route path='/properties' element={<Properties/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignupPage/>} />
    </Routes>
  )
}

export default AllRoutes
