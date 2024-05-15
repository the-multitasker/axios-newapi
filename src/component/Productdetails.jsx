import React, { useDebugValue, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { apiData, sendToCart } from '../redux/action/action';
import { ToastContainer, toast } from 'react-toastify';

export default function Productdetails() {
  const cartData = useSelector((state) => state.cartProduct.cartProducts);
const dispatch = useDispatch();
  const {id} = useParams();
  const allProduts = useSelector((state) => state.product.products)

  const singleProduct = allProduts.filter((item) => item.id === parseInt(id))
// console.log(singleProduct)

useEffect(()=>{
  dispatch(apiData())
},[])

const addtocart = (id) =>{
const cartProduct = singleProduct.filter((item) => item.id === id)
dispatch(sendToCart(cartProduct));
toast.success("product Added to Cart")
}

  return (
   <>
   {
    singleProduct.map((item, index) =>(
      <div className="container homecart">
      <div className="row">
        <div className='col-md-4'>
  <img src={item.images[0]} width="100%"/>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-7'>
  <h2>{item.title}</h2>
  <hr />
  <p>Rating:{item.rating.rate}</p>
  <br/>
  <h1>Price : {item.price}</h1>
  <br/>
  <p><b>Description</b> {item.description}</p>
  <button className={cartData.find((el) => el.id === item.id) ? 'btn btn-danger disabled' : 'btn btn-danger'} onClick={()=> addtocart(item.id)}>Add to Cart</button>
  <ToastContainer />
        </div>
      </div>
     </div>
    ))
   }
   </>
  )
}
