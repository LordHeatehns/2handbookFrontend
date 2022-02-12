
import Book from "../Book";
import axiosInstance from "../../axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development"
import  '../../CssComponents/CategoriesComponent.css'

const CategoriesCompenent=({namePath})=>{
   
    const [data,setData] = useState({
        posts:[]
    });


    useEffect(()=>{
        axiosInstance.get(`categories/${namePath}/`).then((response)=>{
            const allPosts = response.data;
            setData({posts:allPosts})
            console.log(allPosts)
           
        })
    },[setData])
    
    if (data.posts.length  !== 0) {

        return (
            <div className="contain-categories-component">
                <div className="page-categories-component">
                {data.posts.map((i)=>{
                    return(
                             <Book image={i.imgProduct} namebook = {i.title} price = {i.price} slug ={i.slug}></Book>
                    )
                  
                })}
              </div>
                      
            </div>
        
        )
    }

    else {
        return(
            <div className="contain-404-categories-component">
                <h1>Not Found !</h1>
                <section className="error-categories-component">
                    <span className="four"><span className="screen-reader-text"></span></span>
                    <span className="zero"><span className="screen-reader-text"></span></span>
                    <span className="four"><span className="screen-reader-text"></span></span>
                </section>
            </div>
        )
    }
       
    




}

   




export default CategoriesCompenent;