export const cartReducer = (state,action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state,cart:[...state.cart,{...action.payload,qty:1}]}
    
        case "REMOVE_FROM_CART":
            return {...state,cart:state.cart.filter((c)=>c.id!==action.payload.id)}
        case "CHANGE_CART_QTY":
            return {...state,cart:state.cart.filter((c)=>c.id === action.payload.id? (c.qty=action.payload.qty):c.qty)}
            // c.qty =action.payload.qty
        default:
            return state;
    }
}

export const productReducer = (state ,action)=>{
    switch(action.type){
     case "SHORT_BY_PRICE":
        return {...state,sort:action.payload}
     case "FILTER_BY_RATING":
        return {...state,byRating:action.payload}
     case "FILTER_BY_SEARCH":
        return {...state,searchQuery:action.payload}
     case "CLEARE_FILTER":
        return {
            byRating:0,
            searchQuery:""
        }
    }
}

export const btnReducer = (state ,action) =>{
    switch (action.type) {
        case "ADD_BTN":
            return [...state,<button></button>]
            
        case "REMOVE_BTN":
            return [...state].slice(0,-1)    
    
    }
}