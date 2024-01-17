

import './App.css'
import Login from './Components/Login'
import Home from './Components/Home'
import {  Routes,Route,Link} from "react-router-dom";
import { AppContext } from './Context';
import Enterotp from './Components/Enterotp'
import React, { useContext } from 'react'
function App() {

 
  return (
    <>
    <Routes>
<Route path="/" element={<Login/>}/>

<Route path="/Home" element={<Home/>} /> 

<Route path="/EnterOtp" element={<Enterotp/>} />


      
    </Routes>
    
    </>
  )
}

export default App
