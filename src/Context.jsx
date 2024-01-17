/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { createContext, useState, useContext } from 'react';
const AppContext = createContext();

 const MyContextProvider = ({ children }) => {
  
    const[isLogin,setisLogin]=useState(false);
    const[mobileNumber,setMobileNumber]=useState(0);
    const[user,setUser]=useState({
        "username":"",
        "token":"",
    });
    const[hotelData,setHotelData]=useState([])
    const handlelogin=()=>{
        setisLogin(true)      
    }
    const handleBack = () => {
        setMobileNumber(0);
        setisLogin(false);
      }
    
    return <AppContext.Provider value={{isLogin,setisLogin,handlelogin,user,setUser,handleBack,mobileNumber,setMobileNumber,hotelData,setHotelData}}>
    {children}
    </AppContext.Provider>;
  };
  export { AppContext,MyContextProvider };
