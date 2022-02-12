import './Cart.css'
import { connect } from 'react-redux';
import CartItem from './cartItem/CartItem';
import { useEffect, useState } from 'react';




const Cart=({cart})=>{
    const [totalPrice , setTotalPrice] =useState(0);
    const [totalItems , setTotalItems] =useState(0);

    useEffect(()=>{
        let items = 0;
        let price = 0;
        
        cart.forEach((item)=>{
            items += item.qty;
            price += item.qty * Number(item.price) 
           
        });
        setTotalPrice(price)
        setTotalItems(items)

        

    },[cart ,totalPrice ,totalItems ,setTotalItems ,setTotalPrice])
    return (
        <div className='cart'>
            <div className='cart-item'>
             {cart.map((item)=>{
                return(
                 <CartItem key={item.id} cartItems={item} />
                )
             })}
            </div>

            <div className='cart-summary'>
                <h4 className='summary-title'>summary</h4>
                <div className='summary-price'>
                    
                    <span>TOTAL: ({totalItems} items)</span>
                    <span>$ {totalPrice}</span>
                </div>
                <button className='summary-checkoutBtn'>Purchase Now </button>
            </div>
        </div>
    )
}

const mapStateToProp =(state)=> {
    return {
        cart:state.shop.cart,
    }
  }

export default connect(mapStateToProp)(Cart);