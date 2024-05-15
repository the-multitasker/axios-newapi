import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiData } from '../redux/action/action';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
const dispatch = useDispatch();
const allProduts = useSelector((state) => state.product.products)



// console.log(allProduts)

  useEffect(()=>{
    dispatch(apiData())
  },[])

  return (
   <>

   {
    allProduts &&

    <section className='pt-4 pb-4 homecart'>
    <div className="container">
      <div className="row">
       {
        allProduts.map((itm, index) =>(
          <div className='col-md-3 pt-4' key={index}>

         <Link to={`/product/${itm.id}`}>
         <div className="card text-center">
    <img src={itm.images[0]} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{itm.title.substring(0,15)}</h5>
      <h5>{itm.price}</h5>
      
    </div>
  </div>
         </Link>
          </div>
        ))
       }
      </div>
    </div>
   </section>
   
   }
   
   </>
  )
}
