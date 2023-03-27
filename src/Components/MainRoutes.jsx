import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
const MainRoutes = () => {
  return (
   <Routes>
    <Route to={"/"} element={<Home/>}/>
    <Route to={"/about"} element={<About/>}/>
    <Route to={"/projects"} element={<Projects/>}/>
    <Route to={"/Skills"} element={<Skills/>}/>
    <Route to={"/contact"} element={<Contact/>}/>
   </Routes>
  )
}

export default MainRoutes