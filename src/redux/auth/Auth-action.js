import * as actionTypes from './Auth-types'




export function addLogin(){
    return {
        type:actionTypes.ADD_LOGIN,
    }
}

export const addDataUser=(post)=>{
   return {
       type:actionTypes.ADD_DATA_USER,
       payload:{
           data:post
       },
   };
};

export const  addLogout =()=>{
    return {
        type:actionTypes.ADD_LOGOUT,
    };
};

