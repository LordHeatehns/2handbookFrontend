
import BgLoading from './BgLoading'
import React from 'react'

const ShellLoading =(Component)=>{
    return function ShellLodingComponent({isLoading, ...props}){
       if (!isLoading) return <Component {...props} />;
                
       return(
           <BgLoading />
       ); 
    };
}


export default ShellLoading;