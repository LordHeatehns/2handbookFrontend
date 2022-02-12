import { connect } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import { addItemQTY, removeCart } from '../../../redux/shopping/Shopping-action';
import './CartItem.css'

const CartItem =({cartItems ,addQTY ,removecart})=>{
    const [input, setInput] =useState(cartItems.qty);

    function truncateString(str, num) {
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
      }

    const onChangeAddQTY=(e)=>{
        setInput(e.target.value);
        addQTY(cartItems.id, e.target.value)
    }
    return(
    <div className='container-cart-item'>
        <img className='cartItem-image' src={cartItems.imgProduct} alt='' />
        <div className='cartItem-details'>
            <p className='details-title'>{truncateString(cartItems.title,57)}</p>
            <p on className='details-desc'>{truncateString(cartItems.synopsis,160)}</p>
            <p className='details-price'>{cartItems.price}</p>
        </div>
        
        <div className='cartItem-actions'>
           <button className='cartItem-deleteItemBtn' onClick={()=>removecart(cartItems.id)}>+</button>
           <div className='cartItem-qty'>
             <label htmlFor='qty'>Qty</label>
             <input min="1" type="number" id="qty" name='qty' value={input} onChange={onChangeAddQTY} />
           </div>
       </div>
    </div>
    )
    
}

const mapDispatchToprops=(dispatch)=>{
    return {
        addQTY:(id,qty)=> dispatch(addItemQTY(id,qty)),
        removecart:(id)=> dispatch(removeCart(id)),
    }
}

export default connect(null,mapDispatchToprops)(CartItem );