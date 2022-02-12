import { useEffect, useState } from "react/cjs/react.development"
import { connect } from "react-redux"
import { useParams } from "react-router"

const Test = (props)=>{
  const { slug } = useParams();
  const [click,setClick] =useState()
  const handleClick = (e)=>{
      e.preventDefault();
  }
  console.log(props.data)
  console.log(props.data.userData.title)
  return(
      <div>
           <h1>555+</h1>
           <button onClick={handleClick}>OKKK</button>
           
           {props.data.isFetching ? <h1>Loading...</h1> : null}
           {props.data.isError ? (
               <h3>No such product exists.</h3>
           ) :null}

           {Object.keys(props.data.userData).length > 0 ?(
               <div>
                   <h5>{props.data.userData.title}</h5>
                   <h5>{props.data.userData.price}</h5>
                   <h5>{props.data.userData.slug}</h5>

               </div>           
            ):null}
      </div>
  )
}


const mapStateToProps = (state)=>{
    return {
        data:state
    }
}



export default connect(mapStateToProps)(Test);
