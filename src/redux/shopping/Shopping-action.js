import * as actionTypes from './Shopping-types';
import axiosInstance from '../../axios';



export const fetchData=(post)=>{
    return {
        type:actionTypes.FETCHED_PRODUCT,
        payload:{
            data:post
        },
    };
};

export const addToCart =(itemID,firstQTY)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{
            id:itemID,
            fqty:firstQTY,
        },
    };
};


export const  removeCart =(itemID)=>{
    return{
        type:actionTypes.REMOVE_CART,
        payload:{
            id:itemID,
        },
    };
};



export const  addItemQTY =(itemID , qty)=>{
    return{
        type:actionTypes.ADD_ITEM_QTY,
        payload:{
            id:itemID,
            qty,
        },
    };
};


export const  loadCurrentItem =(item)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{
            item
        },
    };
};


export const receive_error=()=>{
    return{
        type:actionTypes.FETCH_ERROR
    }
}


export const logout_shopping=()=> {
    return {
        type:actionTypes.LOGOUT_SHOPPING
    }
}


export const thunk_action_creator = ()=>{
    return function(dispatch, getState) {
        return axiosInstance.get(`detail/`).then((response)=>{
            const data = response.data
           
            if (data.message === 'Not Found') {
                throw new Error("no such product found")
            }
            else {
                dispatch(fetchData(data))
            } 
        }).catch(err => dispatch(receive_error()))

    }
}

