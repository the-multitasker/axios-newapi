import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deteteItemFromcart } from '../redux/action/action';

export default function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartProduct.cartProducts);

  // console.log(cartData);

  const subtotal =  cartData.reduce((total, item) =>{
    return item.price + total
  }, 0)

const deleteItemFromCart = (id) =>{
  const deletedItem = cartData.filter ((item) => item.id !== id);
  dispatch (deteteItemFromcart(deletedItem))

}

  return (
    <>
    {
      cartData &&
      <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
        <table class="table">
  <thead>
    <tr>
      <th >#</th>
      <th >Product Image</th>
      <th >Product Name</th>
      <th >Product Price</th>
      <th >product Quantity</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {
    cartData.map((item, index) =>(
      <tr>
      <th >{index+1}</th>
      <td><img src={item.image}  width="50px"/></td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>1</td>
      <td><button className='btn btn-danger' onClick={() => deleteItemFromCart(item.id)}>x</button></td>
    </tr>
   
    ))
   }
   
  </tbody>
</table>
        </div>
        <div className='col-md-4'>
      <div className='card'>
        <div className='card-header'>
          <h4>Product Details</h4>
        </div>
        <div className='card-body'>
        <table class="table">

<tbody>
 {
  cartData.map((item, index) =>(
    <tr>
    <th >{index+1}</th>
    <td><img src={item.image}  width="50px"/></td>
    <td>{item.title.substring(0,15)}</td>
    <td><b>{item.price}</b></td>
   
    
  </tr>
 
 
  ))
 }
 
</tbody>
</table>

        </div>

        <div className='card-footer'>
    <h5>Total Proce :-  {subtotal.toFixed(2)}</h5>
    </div>
      </div>

        </div>
      </div>
    </div>
    }
   
    </>
  )
}
