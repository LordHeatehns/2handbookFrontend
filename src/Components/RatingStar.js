import '../CssComponents/RatingStar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { number, string } from 'prop-types'
import { Rating } from 'react-simple-star-rating'





const RatingStars=({size})=>{
  const [rating,setRating] =useState(75)

  // catch Rating value
  const handleRating =(rate)=>{
    setRating(rate)
    console.log(rate)
  }


  return(
      <div className='rating'>
          <Rating  onClick={handleRating} size={size} ratingValue={rating}
           allowHalfIcon={false} readonly={false}  /><span style={{'fontSize':'13px'}}>4.5</span>
           
      </div>
  )
 
}



export default RatingStars;