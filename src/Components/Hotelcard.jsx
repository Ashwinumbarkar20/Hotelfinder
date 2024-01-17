/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Hotelcard({ hotel }) {
    console.log(hotel)
  return (
    
        <Maincard >
    
    <div className='imgdiv'><img src={hotel.images[0].url} alt="restopic" /></div>
    <div><h3>{hotel.restaurant_name}</h3></div>
    <div><p>B-6/2, Model Town 1, Model Town Phase I, Mukherjee Nagar, New Delhi, Delhi 110009</p></div>
    
   <div className='details'>
   <div>
       <p>Average cost of 2 people</p>
       <p>₹{hotel.avg_cost_for_two}</p>
    </div>
    <div>
    <p>Rating</p>
    <p>{hotel.rating.restaurant_avg_rating}</p>
    </div>
    
</div>
         
   
      
   </Maincard>
    
    
  );
}

const Maincard = styled.div`
padding:10px;
cursor: pointer;
  border: 1px solid black;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-direction:column;
  margin: 16px;
  width:300px;
  height:400px;
  .imgdiv{
    border:1px solid black;
    border-radius:10px;
    width:280px;
    height:100px;
    img{
height:100%;
width:100%;
border-radius:10px;
    }
  }
  .details{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    p{
        line-height:1px;
        text-align:center;
    }
  }
  p{
    text-align:center;

  }
`;

