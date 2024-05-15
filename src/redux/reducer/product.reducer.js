const instialSate = {
    products:[]
}

export const productReducer = (state = instialSate, action) =>{
    switch (action.type) {
        case 'FETCH_API_DATA':
            
        return{
            ...state,
            products:[...action.payload]
        }
    
        default:
            return state;
    }
}