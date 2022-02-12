import { useState } from "react"
import CategoriesCompenent from "./CategoriesComponent"

const Novel =()=>{
   const [path,setPath] =useState('novel')
    return(
       <div>
            <h1 style={{"marginLeft":"15.5%"}}>Novel</h1>
           <CategoriesCompenent  namePath ={path}/>
       </div>
    )
}

export default Novel ;