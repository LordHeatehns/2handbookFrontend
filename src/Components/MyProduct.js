import '../CssComponents/MyProduct.css'
import AddProduct from './AddProduct';
import { useState } from 'react';
import axiosInstance from '../axios';
import { useEffect } from 'react/cjs/react.development';

const MyProduct =()=>{
    
    const [data,setData] =useState({data:[]})
    useEffect(()=>{
      axiosInstance.get('detailUser/').then((response)=>{
          localStorage.setItem('my-product',JSON.stringify(response.data))
          setData({data:JSON.parse(localStorage.getItem('my-product'))})
          console.log(response.data)
      })
    },[localStorage.getItem('access_token')])
   
    const handleOpenForm =()=>{
        const closeWindow = document.querySelector("#close-Add-product");

        closeWindow.style.display = "block"
    }
    const handleCloseForm =()=>{
        const closeWindow = document.querySelector("#close-Add-product");

        closeWindow.style.display = "none"
    }

    const handleClickDeleted=(e)=>{
        const removeId = e.target.dataset.id;
        const removeElement = document.querySelector(`tr[data-remove="${removeId}"]`)
        if (window.confirm('are you sure to delete ?')){
            axiosInstance.post('delete/',({id:removeId})).then((response)=>{
                removeElement.remove()
            })

        }

    }

     
    const handleClickPublished=(e)=>{
       const slider = e.target
       const status = e.target.dataset.val
     
       
       if (status === "off") {
        console.log('condition1')
           slider.classList.remove("slider-01")
           slider.classList.add("slider-02")
           slider.dataset.val = "on"
           console.log(slider.dataset.val)
           console.log(slider.dataset.id)

           axiosInstance.post("updateStatus/",{
            code:slider.dataset.id,
            status:slider.dataset.val,
           }).then((response)=>{
           //
           })
       }
       
       else if (status==="on") {
         console.log('condition2')
         slider.classList.remove("slider-02")
         slider.classList.add("slider-01")
         slider.dataset.val = "off"
         
         axiosInstance.post("updateStatus/",{
             code:slider.dataset.id,
             status:slider.dataset.val,
         }).then((response)=>{
            //
         })
       }
    }

    return (
        <div className ="contain-my-product">
           <div id="close-Add-product" className="component-add-product">
               <AddProduct  functionCloseform ={handleCloseForm}/>
           </div>
           <div className="icon-add-product" onClick={handleOpenForm}></div>
           <table className='content-table'>
                <thead>
                    <tr>
                      <th>Title</th>
                      <th>Code Product</th>
                      <th>Status Published</th>
                      <th>Delete Product</th>
                       
                    </tr>
                </thead>
                   {data.data.map((i)=>{
                       return(
                        <tbody>
                          <tr className='active-row' data-remove={i.code}>
                             <td style={{'color':'black'}}>{i.title}</td>
                             <td>{i.isbn}</td>
                             <td>
                               <div className='switch-toggle '>
                                   <div className={i.status=== 'off' ? "slider-01":"slider-02"} id='slider' onClick={handleClickPublished}
                                     data-id={i.code} data-val={i.status}></div>
                               </div>
                             </td>
                             <td ><button className='delete-myproduct' onClick={handleClickDeleted} data-id={i.code}>Delete</button></td>
                          </tr>
    
                        </tbody>
                        
                       )
                    })}
               </table>
        </div>
    )
}

export default MyProduct;