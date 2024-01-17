/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import React, { useState,useContext,useEffect } from 'react'
import { AppContext } from '../Context';
import { Link,useNavigate } from 'react-router-dom';






export default function EnterOtp() {
    const {handleBack,mobileNumber,user,setUser,setHotelData } = useContext(AppContext);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [apiError, setApiError] = useState(null);
    const navigate = useNavigate();
   
    const apiUrl = 'https://staging.fastor.in/v1/pwa/user/login';
    const fetchhotelapi = 'https://staging.fastor.in/v1/m/restaurant?city_id=118';
  
    const handleVerify = async () => {
      try {
        const res = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `phone=${mobileNumber}&otp=${otp.join('')}&dial_code=%2B91`,
        });
  
        const data = await res.json();
  
        if (data.status === 'Success') {
          setUser({
            username: data.data.user_name,
            token: data.data.token,
          });
          console.log(data.data.user_name);
          console.log(data.data.token);
          
        } else {
          setApiError('OTP is not Correct');
        }
      } catch (error) {
        setApiError('Error in API');
      }
    };
  
    useEffect(() => {
      const fetchHotelData = async () => {
        try {
          const res = await fetch(fetchhotelapi, {
            method: 'GET',
            headers: {
              Authorization: user.token,
            },
          });
          const data = await res.json();
          setHotelData(data);
        } catch (error) {
          console.error('Error fetching hotel data:', error);
        }
      };
  
      if (user.token) {
        fetchHotelData();
        navigate('/Home');
      }
    }, [setHotelData,user.token]);

  return (
    <OtpSection>

      <div className='backToLogin'><Link to="/"><IoIosArrowBack className='backIcon' /></Link>
        
      </div>
      <div className='wrapper'>
        <div className='enterOtpDiv'>
        <div className='header'>
        <h1>OTP Verification</h1>
          <p>Enter the verification code we just sent on your Mobile Number. {mobileNumber}</p>
        </div>
          
          <div className='otpInputs'>
            {[...Array(6)].map((_, index) => (
              <input key={index} type='text' 
              maxLength="1" 
              name={`otpInput-${index}`} 
              id={`otpInput-${index}`} 
              onChange={(e) => {
                  const newOtp = [...otp];
                  newOtp[index] = e.target.value;
                  setOtp(newOtp);
                }}
              />
            ))}
          </div>
          <button type='button'onClick={handleVerify} >Verify</button>
          
          <p style={{"color":"red"}}>{apiError}</p>
          <p >Didn’t receive the code? 
          <Link to="/"><span style={{"color": "#5574C6","cursor":"pointer"}}onClick={handleBack}>Resend</span></Link></p>
        </div>
      </div>
    </OtpSection>
  );
}

const OtpSection = styled.section`
  .backToLogin {
    margin-top: 55px;
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    width: 72px;
    height: 72px;
    padding: 16px 15px 15px 16px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    .backIcon {
    width: 41px;
    height: 41px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid var(--Border, #e8ecf4);
    background: var(--White, #fff);
  }
  }

 .wrapper{
    width:350px;
    margin:auto;
    .enterOtpDiv {
    height:80vh;
    gap:24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .header{
        h1{
        color: var(--Dark, #1E232C);
        text-align:left;
font-family: Urbanist;
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 33.8px */
letter-spacing: -0.26px;
    }
    p{
 color: var(--Gray, #838BA1);
font-family: Urbanist;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 24px */
    }
    }
    
    button{
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
  }

  .otpInputs {
    display: flex;
    gap: 10px;
    input{
        text-align:center;
   font-size:15px;     
width: 49px;
height: 60px;
padding:10px;
flex-shrink: 0;
        border-radius: 8px;
border: 1px solid var(--Border, #E8ECF4);
background: #F7F8F9;
    }
  }
 }

 

  
`;
