import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development';
import '../CssComponents/DropdownUser.css'


const DropdownUser =(props)=>{
     const { picProfile ,userName } = props ;
    return(
        <div className="dropdown-user " id='icon-user'>
          <div className ="dropdown-line">
             <img  src={picProfile} />
              <div className="set-username">{userName}</div>
          </div>
 
          <div className ="dropdown-line">
               <Link  to="/my-product" ><div className="set-my-profuct">My Product</div></Link>
          </div>

          
          <div className ="dropdown-line">
               <Link  to="/crop" ><div className="set-my-profuct">Edit Profile</div></Link>
          </div>
 
 
 
          <div className ="dropdown-line">
                <Link to='/logout'><div className="set-logout" >Logout</div></Link>
          </div>
 
       </div>

      

    )

}


export default DropdownUser;