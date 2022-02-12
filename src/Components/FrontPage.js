
import '../CssComponents/FrontPage.css'
import { useState  ,useEffect} from 'react';
import  ShellLodingComponent from './ShellLoading'
import axiosInstance from '../axios';
import Shell from './Shell';
import Categories from './Sidebar';
import { connect } from 'react-redux';
import { fetchData } from '../redux/shopping/Shopping-action';
import { thunk_action_creator } from '../redux/shopping/Shopping-action';





function FrontPage({products , loading}) {
    
 
    const ShellLoding = ShellLodingComponent(Shell);

    //products.map(i => console.log(i.code.producer))
        
    return (
  
      <div className="container" >
           <Categories />
           <ShellLoding isLoading = {loading} shell = {products} />
           
      </div>
    );
  }


  const mapStateToProp =(state)=> {
    return {
        products:state.shop.products,
        loading:state.shop.isLoading
    }
  }

  const mapDispatchProps=(dispatch)=>{
     return {
       setData:(data)=>{dispatch(fetchData(data));
       }
     }
  }

 

export default connect(mapStateToProp,mapDispatchProps)(FrontPage);