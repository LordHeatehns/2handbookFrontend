import { Link } from 'react-router-dom';
import '../CssComponents/Login.css'
import axiosInstance from '../axios';
import { useHistory } from 'react-router';
import React, { useState  , useContext} from 'react';
import { connect } from 'react-redux';
import { addLogin } from '../redux/auth/Auth-action';
import Store from '../redux/Store';
import  iconLogin from '../Image/Login/user-circle-solid.svg';
import  iconPassword from '../Image/Login/unlock-solid.svg';





export const CurrentuserContext = React.createContext();
const Login =({addlogin})=>{
   
    const history = useHistory()
    const initialFormData = Object.freeze({
      email:'',
      password:''
    });

    const [formData,setFormData] = useState(initialFormData)

    const handleChange = (e)=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value.trim(),
      });
    }


    const handleSubmit =(e)=>{
      e.preventDefault();
      axiosInstance.post('token/' ,{
        email:formData.email,
        password:formData.password,
      })
      .then((response) =>{
        localStorage.setItem('access_token', response.data.access);
				localStorage.setItem('refresh_token', response.data.refresh);
        console.log(response.data.refresh)
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
        addlogin();
				history.push('/');
       

      })
      .catch(error =>{
        console.log(error)
        const email = document.getElementById('email')
        const password = document.getElementById('password')

        email.style.borderBottom = '2px solid red';
        password.style.borderBottom = '2px solid red';
        
      }) 
    }

    const handleFocus =()=>{
      const iconEmail = document.getElementById('icon-email')
      const iconPassword = document.getElementById('icon-password');
      iconPassword.style.display = 'none'
      iconEmail.style.display = 'none'
     
    }

   
    return(
      <form>
        
       <div className ="login">
           <h1>Login</h1>
           <div className="username">
              <p className="topicUsername">Username</p>
              <img id="icon-email"  className="icon-username" src = {iconLogin} />
              <input type="email" placeholder="      Type your username" onChange = {handleChange} name="email" id="email" onFocus = {handleFocus}/>

              <p className="topicPassword">Password</p>
              <img id="icon-password" className="icon-password" src = {iconPassword} />
              <input type="password" placeholder="      Type your Password" onChange = {handleChange}  name="password" id="password" onFocus = {handleFocus}/>
              <Link to ="/forgetPassword" className="forgetPass">Forget password ?</Link>
              <button className="btnLogin" onClick={handleSubmit}>Login</button>
            </div>
            <p className="text-or-sign">Or Sign Up Using</p>
            <div className ="singupMedia">
              <img className="logoMedia" src="https://images.vexels.com/media/users/3/137283/isolated/preview/8ca486faebd822ddf4baf00321b16df1-google-icon-logo-by-vexels.png"></img>
              <img className="logoMedia"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"></img>
              <img className="logoMedia"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"></img>
            </div>

            <Link className="link-signUp" to="signup">SIGN UP</Link>
           
       </div>
  
      </form>
    )
}


const mapDispatchToProps=(dispatch)=>{
   return {
      addlogin:()=>dispatch(addLogin()),
   }
}


export default connect(null,mapDispatchToProps)(Login);