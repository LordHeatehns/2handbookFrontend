import { useState } from "react"
import CategoriesCompenent from "./CategoriesComponent"

const Comic =()=>{
   const [path,setPath] =useState('comic')
    return(
       <div>
            <h1 style={{"marginLeft":"15.5%"}}>Comic</h1>
           <CategoriesCompenent  namePath ={path}/>
       </div>
    )
}

export default Comic ;