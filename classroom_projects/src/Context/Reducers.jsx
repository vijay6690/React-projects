export const btnReducer = (state,action) =>{
    switch (action.type) {
        case "ADD_BTN":
            return [...state,<button></button>]
        case "REMOVE_BTN":
            return [...state].slice(0,-1)    
    }
}