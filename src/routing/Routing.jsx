import React from 'react'
import Home from '../component/Home'
import { Route, Routes } from 'react-router-dom'
import Productdetails from '../component/Productdetails'
import Cart from '../component/Cart'
import Categoryproduct from '../component/Categoryproduct'
import Searchproduct from '../component/Searchproduct'

export default function Routing() {
  return (
   <>
     <Routes>
      
          <Route path="/" element={<Home/>} />
           <Route path="product/:id" element={<Productdetails />} />
           <Route path="/:cat" element={<Categoryproduct />} />
          <Route path="search/:term" element={<Searchproduct />} />
           <Route path="cart" element={<Cart />} />
         
        </Routes>
   </>
  )
}
