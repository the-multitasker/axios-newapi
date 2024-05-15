import axios from "axios"

export const apiData = () => async(dispatch) =>{

    const res = await axios.get('https://dummyjson.com/products');
    const result = await res.data.products;
   //   console.log(result)

     dispatch({
        type:'FETCH_API_DATA',
        payload:result
     })
}

export const sendToCart = (cartProduct) => (dispatch) =>{
   dispatch({
      type:'ADD_TO_CART',
      payload:cartProduct
   })
}

export const deteteItemFromcart = (deletedItem) => (dispatch) => {
   dispatch({
      type:'DELETE_FROM_CART',
      payload:deletedItem
   })
}