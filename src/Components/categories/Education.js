import { useState } from "react"
import CategoriesCompenent from "./CategoriesComponent"

const Education =()=>{
   const [path,setPath] =useState('education')
    return(
       <div>
            <h1 style={{"marginLeft":"15.5%"}}>Education</h1>
           <CategoriesCompenent  namePath ={path}/>
       </div>
    )
}

export default Education ;