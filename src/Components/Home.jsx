
import React, { useState,useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../Context'
export default function Home() {
    const {hotelData}=useContext(AppContext)
  return (
    <Maindiv>
     <p>{hotelData.length}</p>
    </Maindiv>
  )
}
const Maindiv=styled.div``

