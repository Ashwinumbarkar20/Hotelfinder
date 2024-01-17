import React, { useState,useContext } from 'react'
import styled from 'styled-components'
import Enterotp from './Enterotp'
import { AppContext } from '../Context';
import { Link, Navigate,useNavigate } from 'react-router-dom';


export default function Login() {
    const loginapi='https://staging.fastor.in/v1/pwa/user/register';
    const { isLogin, handlelogin,mobileNumber,setMobileNumber } = useContext(AppContext);
    const [apiError, setApiError] = useState(null);
    const navigate = useNavigate();
    const handleLoginApi=async ()=>{
        try{
            
            const res = await fetch(loginapi, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `phone=${mobileNumber}&dial_code=%2B91`,
              });
              const data = await res.json();
              if(data.status === 'Success'){
                handlelogin();
                navigate('/Enterotp');
                
              }
               else {

        setApiError(data.error_message); }


    }
catch(e){
    console.error('Error during API call:', e);
      setApiError('Error during API call');
}}

  return (
<>
   (<LoginSection className='login'>
    <h1 className='heading'>Enter Your Mobile Number</h1>
    <p className='note'>We will send you the 6 digit verification code</p>
    <input className='mobile-number' type="text" 
    maxLength="10" 
    placeholder='Enter your Mobile Number' 
    onChange={(e) => {setMobileNumber(e.target.value);}}
            value={mobileNumber}
    />
    
    <p style={{"color":"red"}}>{apiError}</p>
    <button className="otp-send"type="button" onClick={handleLoginApi}>Send Code</button>
    
  </LoginSection>)
 </>   
  )
}
const LoginSection=styled.section`
width:350px;
margin:auto;
    height:100vh;
    display:flex;
    gap:18px;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    .heading{
        text-align:left;
font-size: 26px;
font-style: normal;
font-weight: 700;
letter-spacing: -0.26px;
font-family: 'Urbanist';
}

.note{
text-align: center;
width: 331px;
color:#8391A1;
font-size: 16px;
font-style: normal;
font-weight: 500;
font-family: 'Urbanist';

}
.mobile-number{
 border-radius: 8px;
border: 1px solid #DADADA;
background: #F7F8F9;
width: 330px;
height: 56px;
padding-left:20px;
text-align:center;
padding-right: 20px;
font-family: 'Urbanist';
font-size: 15px;
}
.otp-send{
    width: 330px;
height: 56px;

border-radius: 8px;
background: #FF6D6A;
text-align: center;
font-size: 15px;
font-weight: 600;
color:white;
font-family: 'Urbanist';
border:none;
cursor: pointer;
box-shadow: 4px 4px 6px rgba(0,0,0,0.7);
}
`