import * as actionTypes from './Auth-types'


const initialUser = {
    isLogin:false,
    isLogout:true,
    data:[],
}


const authReducer =(state = initialUser ,action)=>{
    switch (action.type) {


        case actionTypes.ADD_LOGIN:
            return {
                ...state,
                isLogin:true,
                isLogout:false,
                

            }


        case actionTypes.ADD_DATA_USER:
            return {
                ...state,
                isLogin:true,
                isLogout:false,
                data:action.payload.data

            }
        case actionTypes.ADD_LOGOUT:    
            return {
                ...state,
                isLogin:false,
                isLogout:true,
                data:[],
            }
    
        default:
            return state ;
    };
};

export default authReducer ;