import { useState } from 'react';
import '../CssComponents/SignUp.css'
import { useHistory } from 'react-router';
import axiosInstance from '../axios';

const SignUp =()=> {
    const [checkbox,setCheckbox] = useState(true)
    
    const handleChanged =()=>{
        setCheckbox(!checkbox)
    }

    const history = useHistory()
    const initialFormData = Object.freeze({
        email:'',
        username:'',
        password:'',
        firstname:'',
        confirmpassword:''
     
      
    });

    const [formData,setFromData] = useState(initialFormData)

    const handleChange =(e)=>{
        setFromData({
            ...formData,
            [e.target.name]:e.target.value.trim(),
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axiosInstance.post('user/register/',{
            email:formData.email,
            user_name:formData.username,
            password:formData.password,
            first_name:formData.firstname,
            confirmpassword:formData.confirmpassword
            
            
        })
        .then((response)=>{
           if(response.data.mesconfirmpassword) {
              const warningPassword = document.getElementById('warning-password')
              const confirmPassword = document.getElementById('confirmpassword')
              confirmPassword.style.border = '1px solid red'
              warningPassword.innerHTML = response.data.mesconfirmpassword
           }

           else if (response.data.mesemail) {
             const warningPassword = document.getElementById('warning-email')
             const email = document.getElementById('email')
             email.style.border = '1px solid red'
             warningPassword.innerHTML = response.data.mesemail    
           }

           else if (response.data.mesuser) {
             const warningPassword = document.getElementById('warning-username')
             const username = document.getElementById('username')
             username.style.border = '1px solid red'
             warningPassword.innerHTML = response.data.mesuser
           }

           else {
               history.push('/login')
           }
           
        })
        .catch((error)=>{
           console.log(error)
        })

        
        
    }
    return(
        <div className ="register">
            <div className ="item-1">
                <h1>Welcome Back!</h1>
                <p className="p-item1">We are a second hand bookstore</p>
            </div>

            <div className ="item-2">
                 <h1 style={{'margin-left':'5%'}}>Create Account</h1>
                 <p className="p-name">Username</p>
                 <input className="inputs" type="text" onChange={handleChange} name ="username" id="username"/>
                 <span className ="warning" id="warning-username"></span>
                 <p className="p-name">Firstname</p>
                 <input className="inputs" type="text"  onChange={handleChange} name ="firstname" id="firstname"/>
                 <span className ="warning" id="warning-firstname"></span>
                 <p className="p-name">EMAIL ID</p>
                 <input className="inputs" type="email"  onChange={handleChange}  name ="email" id="email"/>
                 <span className ="warning" id="warning-email"></span>
                 <p className="p-name">PASSWORD</p>
                 <input className="inputs" type="password"  onChange={handleChange}  name ="password" id="password"/>
                 <span className ="warning"></span>
                 <p className="p-name">Confirm PASSWORD</p>
                 <input className="inputs" type="password"  onChange={handleChange}  name ="confirmpassword" id="confirmpassword"/>
                 <span className ="warning"  id="warning-password"></span>
                
                
                 <label>
                    <input name="check-box"
                     className ="check-box"
                     type="checkbox" 
                     value={checkbox}
                     onChange={handleChanged}/>
                     I agree All the Statement in Terms of service
                 </label>

                 <button className="btn-sign" onClick={handleSubmit} disabled={checkbox} >Sign Up</button>
                
                 
                 
            </div>
        </div>
    )

}

export default SignUp ;