import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import '../CssComponents/Header.css'
import { useEffect } from 'react';
import axiosInstance from '../axios';
import DropdownUser from './DropdownUser';
import { connect } from 'react-redux';
import { addDataUser } from '../redux/auth/Auth-action';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import  logo from '../Image/headerLogo/logo2hand.png';
import  logoUser from '../Image/headerLogo/user-solid.svg';
import  logoShoppingBag from '../Image/headerLogo/shopping-bag-solid.svg';


const Header =({cart ,dataUser ,addToUser})=>{
   let history = useHistory()
   useEffect(()=>{
      console.log('fetch image')
      axiosInstance.get('image/').then((response)=>{
         const imageProfile = response.data
         console.log(imageProfile)
         localStorage.setItem('img',JSON.stringify(imageProfile))
         addToUser(JSON.parse(localStorage.getItem('img')))
        
      }) 
         
   },[localStorage.getItem('access_token')])
   
     
      const be =()=>{
         const closed = document.querySelector(".contain-search")
         const longBarSearch = document.querySelector(".bar-search")
         const setPlaceholder = document.getElementById("input-search")
         closed.classList.toggle('active');
         longBarSearch.classList.toggle('bar-search2')
         
         if (setPlaceholder.style.display === "flex") {
            
            setPlaceholder.style.display ="none"
         }

         else {
            setPlaceholder.style.display ="flex"
            setPlaceholder.placeholder ="  search..."
         }
           
         
         
         
      }
    
      


      const [toggleDropdown,setToggleDropdown] = useState(false)

      const HandleClickDropdown=(event)=>{
         event.stopPropagation();
         setToggleDropdown(!toggleDropdown)
      }

      document.addEventListener('click',function(){
         setToggleDropdown(false)
      })

      const [cartCount, setCartCount] = useState(0);
      useEffect(()=>{
         let count =0;
         cart.forEach((item)=>{
            count += item.qty;
         })
         
        setCartCount(count);
      },[cart,cartCount]);


      //search
      const [wordSearch,setWordSearch] =useState({search:''})

      const handleChangeSearch=(e)=>{
         console.log(e.target.value)
         setWordSearch({
            ...wordSearch,
            [e.target.name]:e.target.value.trim(),
         })
      }
      const goSearch=(event)=>{
         var  valueSearch =document.getElementById('input-search').value

         if (valueSearch.length > 0  &&  event.key === 'Enter') {
             console.log("Enter")
             history.push({
               pathname:'/search/',
               search:'?search=' + wordSearch.search ,
            });
   
            window.location.reload();
     
          }
        

      
         
      }



             

   
       if (localStorage.getItem('access_token')) {
         return (

            <header >
               <Link to="/" className="container-logo"><img className="logo" src={logo} /></Link>
               <form>
                  <div className="contain-search ">
                     <div className="bar-search" onClick={be}>
                        
                     </div>
                    <div className="input">
                    <input type="text" placeholder="" id="input-search" value={wordSearch.search} name='search' onChange={handleChangeSearch} onKeyPress={goSearch}/>
                    </div>
                  </div>
               </form>

               {dataUser.map((i)=>{
                  return (
                     <div  key={i.id}  className ="contain-icon-right">
                           <div  className="contain-saler-logo">
                              <img className='user-current' src={i.image} onClick={HandleClickDropdown}/>
                              {toggleDropdown ?<div className ="dropdown-container">
                                 <DropdownUser   picProfile ={i.image} userName ={i.user.user_name} />
                              </div>:null}
                        </div> 
         
                           <div className ="contain-shopping-bag shop-user">
                           <Link to="/cart"><img className="shopping-bag" src = {logoShoppingBag} /></Link>
                           <div className='cart-count count-user'>{cartCount}</div>
                           </div>
      

                     </div>
                  )
               })}

            </header>
        )
       }

       return (

         <header>
            <Link to="/" className="container-logo"><img src={logo} className="logo"  /></Link>
            <form>
               <div className="contain-search ">
                  <div className="bar-search" onClick={be}>
                     
                  </div>
                 <div className="input">
                 <input type="text" placeholder="" id="input-search" value={wordSearch.search} name='search' onChange={handleChangeSearch} onKeyPress={goSearch}/>
                 </div>
               </div>
            </form>

            <div className ="contain-icon-right">
               <div className="contain-user-logo">
                  <Link to='/login'><img className="user-logo" src={logoUser} /></Link>
               </div>
               <div className ="contain-shopping-bag">
                 <Link to="/cart"><img className="shopping-bag" src = {logoShoppingBag} /></Link>
                 <div className='cart-count'>{cartCount}</div>
               </div>

             
            </div>

           
           

          
         </header>
     )
}

const mapStateToProps =(state)=>{
   return {
      cart:state.shop.cart,
      isLogin:state.auth.isLogin,
      dataUser:state.auth.data,
   }
}

const  mapDispatchToProps=(dispatch)=>{
  return {
     addToUser:(data)=>dispatch(addDataUser(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header) ;