const instialSate = {
    cartProducts:[]
}

export const cartReducer = (state = instialSate, action) =>{
    switch (action.type) {
        case 'ADD_TO_CART':
            // console.log(action.payload);
        return{
            ...state,
            cartProducts:[...state.cartProducts, ...action.payload]
        }
    

        case 'DELETE_FROM_CART':
            // console.log(action.payload);
        return{
            ...state,
            cartProducts:action.payload
        }
    


        default:
            return state;
    }
}