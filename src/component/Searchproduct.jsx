import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Searchproduct() {

    const {term} = useParams();
    
  return (
   <>
   
   <section className='pt-4 pb-4 homecart'>
    <div className="container">
      <div className="row">
      
          <div className='col-md-3 pt-4' >

         <Link to=''>
         <div className="card text-center">
    <img src='' className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">bhfggf</h5>
      <h5>200</h5>
      
    </div>
  </div>
         </Link>
          </div>
       
      </div>
    </div>
   </section>
   </>
  )
}
