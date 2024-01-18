
import React, { useState,useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../Context'
import Hotelcard from './Hotelcard'
import { FaLocationDot } from "react-icons/fa6";
import { Link,useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
    const {hotelData,user,setUser,setMobileNumber}=useContext(AppContext)
   const handlelogut=()=>{
    setUser(
      {"user.token":"",
    "user.username":""});
    setMobileNumber(0);
    navigate("/");
   }
  return (
    <>
      {user.token?(<Maindiv>
      <header className='container-fluid p-2'>
      
      <div> <FaLocationDot /> Delhi</div>
     <div>Welcome, <span style={{"color":"#FF6D6A"}}> {user.username} </span></div>
     <button className='btn border' style={{"color":"#FF6D6A"}} onClick={handlelogut}>Logout</button>
     </header>
       
       <section className='container mt-3'>
   <h1 style={{"textAlign":"center"}}>List of Hotels in Delhi</h1>
   <div className='container '>
   <div className='row justify-content-center'>
     {
       
       hotelData.map((hotel)=>
       <Link className="col-12 col-sm-6 col-md-4 col-lg-4" key={hotel.restaurant_id} style={{"textDecoration":"none","color":'inherit'}}to={`/hotel-details/${hotel.restaurant_id}`}>
       <Hotelcard   hotel={hotel}/>
   
       </Link>
       )
     }
     </div>
   </div>
       </section>
       </Maindiv>)
       :(<h1 style={{textAlign:"center"}}>Session expired, Please login again <Link to="/"><span>Go to Login page</span></Link></h1>)}

    </>
    


    
  )
}
const Maindiv=styled.div`
header{
  box-shadow: 4px 6px rgba(0,0,0,0.7);
  display:flex;
  justify-content:space-around;
  align-items:center;
}`

