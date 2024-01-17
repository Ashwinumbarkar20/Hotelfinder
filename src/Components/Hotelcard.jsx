/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export default function Hotelcard({ hotel }) {
    console.log(hotel)
  return (
    <Maincard >
    
     <div className='imgdiv'><img src={hotel.images[0].url} alt="restopic" /></div>
     <h3>{hotel.restaurant_name}</h3>
     <p>B-6/2, Model Town 1, Model Town Phase I, Mukherjee Nagar, New Delhi, Delhi 110009</p>
     <div>
        <p>Avrage cost of 2</p>
        <p>₹{hotel.avg_cost_for_two}</p>
     </div>
     
    
     <p>Rating:{hotel.rating.restaurant_avg_rating}</p>  
    </Maincard>
  );
}

const Maincard = styled.div`

  border: 1px solid #ddd;
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
`;

