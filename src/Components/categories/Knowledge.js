import { useState } from "react"
import CategoriesCompenent from "./CategoriesComponent"

const Knowlewdge =()=>{
   const [path,setPath] =useState('knowledge')
    return(
       <div>
           <h1 style={{"marginLeft":"15.5%"}}>Knowlewdge</h1>
           <CategoriesCompenent  namePath ={path}/>
       </div>
    )
}

export default Knowlewdge ;