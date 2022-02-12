import '../CssComponents/Sidebar.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Categories =()=>{

    return(
        <div className="containerSidebar">
               <table className="tableCategories">
                   <thead >
                        <tr className="headtable">
                           <th id='categories'>Categories</th>
                        </tr>
                   </thead>

                   <tbody>
                      
                        <tr>
                           <Link to='/'><td>All</td></Link>
                        </tr>
                        
                        <tr>
                            <Link to='/categories/Novel'><td>Novel</td></Link>
                        </tr>
                        
                        <tr>
                           <Link to='/categories/Manga'><td>Manga</td></Link>
                        </tr>
                        
                        <tr>
                            <Link to='/categories/Knowledge'><td>Knowledge</td></Link>
                        </tr>

                        <tr>
                            <Link to='/categories/Article'><td>Article</td></Link>
                        </tr>

                        <tr>
                            <Link to='/categories/Education'><td>Education</td></Link>
                        </tr>

                        <tr>
                            <Link to='/categories/Comic'><td>Comic</td></Link>
                        </tr>
                   </tbody>
            
                  

                     

               </table>
         
        </div>
    )
}





export default Categories