import { useEffect } from "react";
import { useState } from "react/cjs/react.development"
import axiosInstance from "../axios";
import Book from "./Book";
import '../CssComponents/Search.css'


const Search=()=>{
   
    const [dataSearch,setDataSearch] = useState({
        search:'',
        posts:[]
    });


    useEffect(()=>{
        axiosInstance.get('search/' + window.location.search).then((response)=>{
            const allPosts = response.data;
            setDataSearch({posts:allPosts})
            console.log(allPosts)
           
        })
    },[setDataSearch])
    
    if (dataSearch.posts.length  !== 0) {

        return (
            <div className="contain-searched">
                <div className="page-search">
                {dataSearch.posts.map((i)=>{
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
            <div className="contain-404-search">
                <h1>Not Found !</h1>
                <section className="error-container">
                    <span className="four"><span className="screen-reader-text"></span></span>
                    <span className="zero"><span className="screen-reader-text"></span></span>
                    <span className="four"><span className="screen-reader-text"></span></span>
                </section>
            </div>
        )
    }
       
    




}

   




export default Search;