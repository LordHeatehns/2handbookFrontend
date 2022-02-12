import { useState } from "react"
import CategoriesCompenent from "./CategoriesComponent"

const Article =()=>{
   const [path,setPath] =useState('article')
    return(
       <div>
            <h1 style={{"marginLeft":"15.5%"}}>Article</h1>
           <CategoriesCompenent  namePath ={path}/>
       </div>
    )
}

export default Article ;