import * as actionTypes from './Shopping-types';



const  INITIAL_STATE = {
    products:[],
    cart:[],
    currentItem:null,
    isLoading:true,
    isError:false,
    
};
const shopReducer=(state = INITIAL_STATE,action )=>{
   switch (action.type) {
            case  actionTypes.FETCHED_PRODUCT:
                console.log(action.payload.data)
                return {
                ...state,
                isLoading:false,
                products:action.payload.data,
                 
            };
            case actionTypes.ADD_TO_CART:
                // Great Item data from products array
                const item = state.products.find(
                  (product) => product.id === action.payload.id
                );
                
                // Check if Item is in cart already
                const inCart = state.cart.find((item) =>
                  item.id === action.payload.id ? true : false
                );
                console.log(inCart)
                console.log(state.cart)
                
                return {
                  ...state,
                  cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                          ? { ...item, qty: item.qty + action.payload.fqty }
                          : item
                      )
                    : [...state.cart, { ...item, qty:action.payload.fqty }],
                };
            case actionTypes.REMOVE_CART:
                return {
                  ...state,
                  cart: state.cart.filter((item) => item.id !== action.payload.id),
                };
            case actionTypes.ADD_ITEM_QTY:
                return {
                  ...state,
                  cart: state.cart.map((item) =>
                    item.id === action.payload.id
                      ? { ...item, qty: + action.payload.qty }
                      : item
                  ),
                };
            case actionTypes.LOAD_CURRENT_ITEM:
                return {
                  ...state,
                  currentItem: action.payload,
                };
            
            case  actionTypes.FETCH_ERROR:
                return {
                    ...state,
                    isError:true
                }

            case actionTypes.LOGOUT_SHOPPING:
              console.log('shop is denied')
              return {
                ...state,
                cart:[],
                qty:0,
              }
                  
            default:
                return state;
            }
        
          
        
   
   
}


export default shopReducer;