import '../CssComponents/Book.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { truncate } from '../App';
import RatingStars from './RatingStar';

const Book =(props)=>{
    const {image,namebook,price ,slug} =props;
    const [prices,setPrices] = useState(`${'฿'+price}`)

    /*const hoverPrice =()=>{
       setPrices("Add card")
        
    }

    const hoverPriceLeave =()=>{
     
        setPrices(`${'฿ '+price}`)
        
    }*/

    
    
    return(
        <div className="box">
            <Link className="link-detail-slug" to ={`/detail/${slug}`}>
            <img className="book" src ={image}/>
            <p className="nameBook">{truncate(namebook,28)}</p>
            </Link>
            <button  className="price" /*onMouseEnter={hoverPrice} onMouseLeave ={hoverPriceLeave}/*/>{prices}</button>
            <RatingStars  size ={15}/>
        </div>
    )
}



export default Book ;