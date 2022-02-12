import { combineReducers } from "redux";
import shopReducer from "./shopping/Shopping-reducer";
import authReducer from "./auth/Auth-reducer";




const RootReducer  =combineReducers({
    shop:shopReducer,
    auth:authReducer
    
})


export default RootReducer;