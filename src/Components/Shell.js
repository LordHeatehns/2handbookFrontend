
import '../CssComponents/Shell.css'
import Book from "./Book";





const Shell =({shell})=>{


    if (!shell || shell.length === 0 ) return <p>Can not find any  book , sorry</p>

   

    return (

        <div className='containerShell'> 
            <h1>All <span style={{'color':'black'}}>/</span> Latest</h1>
            <div className="book-shell">      
              {shell.map((element)=>{
                  return <Book key={element.id} image={element.imgProduct} namebook = {element.title} price = {element.price} slug ={element.slug}/> 
               })}
    
            </div>
        </div>
      

    )
}



export default Shell ;




    


