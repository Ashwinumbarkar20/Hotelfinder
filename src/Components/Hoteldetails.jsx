
    import styled from 'styled-components'
    import { Link,useNavigate  } from 'react-router-dom';
    import React, { useState,useContext } from 'react'
    import { AppContext } from '../Context'
    import { useParams } from 'react-router-dom';
    export default function Hoteldetails() {
        const { restaurant_id } = useParams();
        const {hotelData,user}=useContext(AppContext)
        const hoteldetails= hotelData.find((hotel)=>restaurant_id===hotel.restaurant_id);
        const navigate = useNavigate();
        
    return (
        <Maindiv>
        
        <div className='container-fluid d-flex flex-row justify-content-between align-items-center'>
        <p className='m-3 fw-bold'>Welcome,<span style={{"color":"#FF6D6A"}}>{user.username}</span></p>
        <Link style={{"textDecoration":"none","color":"#FF6D6A"}} ><button className='btn' onClick={()=>{navigate(-1);}}>Go-back</button></Link>
        </div>

        <div className='Container d-flex flex-column gap-4 justify-content-center align-items-center'>
        <div><h3>{hoteldetails.restaurant_name}</h3></div>
        <div className='imgdiv'><img src={hoteldetails.images[0].url} alt="restopic" /></div>
        <div><p> <span className='fw-bold'>Address</span> : B-6/2, Model Town 1, Model Town Phase I, Mukherjee Nagar, New Delhi, Delhi 110009</p></div>
        
    <div className='details'>
    <div>
        <p>Average cost of 2 people : <span className='fw-bold' >₹{hoteldetails.avg_cost_for_two}/- </span></p>
        
        </div>
        <div>
        <p>Rating: <span className='fw-bold'>{hoteldetails.rating.restaurant_avg_rating}</span></p>
        
        </div>
        
    </div>
        </div>
        
            
    
        </Maindiv>
    )
    }
    const Maindiv=styled.section`
    .imgdiv{
        width:50vw;
        height:50vh;
        border:1px solid black;
        border-radius:20px;
        img{
width:100%;
height:100%;
border-radius:20px;
        }
        
    }
    .btn{
        color:#FF6D6A;
        background-color:white;
        border:2px solid #FF6D6A;
        border-radius:15px;
        box-shadow:4px 4px 6px rgba(0,0,0,0.6);
        &:hover{
            background-color:#FF6D6A;
        color:white;
        border:2px solid #FF6D6A;
        }
    }
    `