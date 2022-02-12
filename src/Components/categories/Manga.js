import { useState } from "react"
import CategoriesCompenent from "./CategoriesComponent"

const Manga =()=>{
   const [path,setPath] =useState('manga')
    return(
       <div>
           <h1 style={{"marginLeft":"15.5%"}}>Manga</h1>
           <CategoriesCompenent  namePath ={path}/>
       </div>
    )
}

export default Manga ;