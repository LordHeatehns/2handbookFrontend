import { useEffect , useState } from "react";
import { useHistory } from "react-router";
import axiosInstance from "../axios";
import { connect } from "react-redux";
import { addLogout } from "../redux/auth/Auth-action";
import { logout_shopping } from "../redux/shopping/Shopping-action";


const Logout =({addlogout ,logoutshop})=>{
    
    const history = useHistory()
    useEffect(()=>{
        const response = axiosInstance.post('user/logout/blacklist/',{
            refresh_token:localStorage.getItem('refresh_token'),
        });
        
        addlogout();
        logoutshop();
        localStorage.clear()
        axiosInstance.defaults.headers['Authorization'] =null ;
       
        history.push('/login')
    })

    return <div>Logout</div>
}

const mapDispatchToProps=(dispatch)=>{
    return {
       addlogout:()=>dispatch(addLogout()),
       logoutshop:()=>dispatch(logout_shopping()),
    }
 }
 





export default connect(null,mapDispatchToProps)(Logout);