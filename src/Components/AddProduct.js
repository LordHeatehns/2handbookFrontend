import '../CssComponents/AddProduct.css'
import { useState } from 'react'
import axiosInstance from '../axios';
import  iconCloud from '../Image/AddProduct/cloud-upload.svg';
import  iconCancle from '../Image/AddProduct/times-solid.svg';



const AddProduct =(props)=>{
    const previewImg = document.querySelector("#previewImg")
    const wrapper = document.querySelector(".wrapper")

    const backviewImg = document.querySelector("#backviewImg")
    const backWrapper = document.querySelector(".back-wrapper")

    

    const [viewImg,setViewImg] = useState()
    const [picUpload,setPicUpload] = useState({
        pic:iconCloud,
        text:"no file chosen yet !"
    });


    const [backViewImg,setBackViewImg] = useState()
    const [backPicUpload,setBackPicUpload] = useState({
        pic:iconCloud,
        text:"no file chosen yet !"
    });

    
    
    const handlechangeBack=(event)=>{
            if(event.target.files[0]) {
                setBackViewImg(URL.createObjectURL(event.target.files[0]))
                setBackPicUpload({pic:"",text:""})
                backviewImg.style.display = "block";
                backWrapper.classList.add("active");
            }

            else {
                //koko
            }
    };

    const handlechange=(event)=>{
        if(event.target.files[0]) {
            setViewImg(URL.createObjectURL(event.target.files[0]))
            setPicUpload({pic:"",text:""})
            previewImg.style.display = "block";
            wrapper.classList.add("active");
        }

        else {
            //koko
        }
    };

    

    const handleCancleBtn =()=>{
        setViewImg(null)
        setPicUpload({pic:iconCloud,text:"no file chosen yet !"})
        wrapper.classList.remove("active")
        previewImg.style.display = "none"
    };

    const handleCancleBtnBack =()=>{
        setBackViewImg(null)
        setBackPicUpload({pic:iconCloud,text:"no file chosen yet !"})
        backWrapper.classList.remove("active")
        backviewImg.style.display = "none"
    };
    
    const [checkbox,setCheckbox] = useState(false)

    const chechBox =()=>{
        setCheckbox(!checkbox)
        
        
    }

    const intitialFormData = Object.freeze({
          title:'',
          slug:'',
          synopsis:'',
          originalPrice:'',
          numberOfPage:'',
          language:'',
          isbn:'',
          author:'',
          price:'',
          quantity:'',
          
          
       });


    function slugify(string) {
		const a =
			'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
		const b =
			'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
		const p = new RegExp(a.split('').join('|'), 'g');

		return string
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
			.replace(/&/g, '-and-') // Replace & with 'and'
			.replace(/[^\w\-]+/g, '') // Remove all non-word characters
			.replace(/\-\-+/g, '-') // Replace multiple - with single -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, ''); // Trim - from end of text
	}

    const [formDataProduct,setFormDataProduct] = useState(intitialFormData)
    
    const handChangeAddproduct=(e)=>{

        if ([e.target.name] == 'title') {
			setFormDataProduct({
				...formDataProduct,
				[e.target.name]: e.target.value.trim(),
				slug: slugify(e.target.value.trim()),
			});
		} else {
			setFormDataProduct({
				...formDataProduct,
				[e.target.name]: e.target.value,
			});
		}

        console.log(e.target.value)
    }

    const handleClickLanguage=(e)=>{
       setFormDataProduct({
           ...formDataProduct,
           [e.target.name]:e.target.value
       })
    }

    const handleClikClose=()=>{
        document.getElementById('title').value =null;
        document.getElementById('synopsis').value =null;
        document.getElementById('originalPrice').value =null;
        document.getElementById('numberOfPage').value =null;
        document.getElementById('isbn').value =null;
        document.getElementById('author').value =null;
        /*document.getElementById('language').value =null;*/
        document.getElementById('price').value =null;
        document.getElementById('quantity').value =null;
        document.getElementById('btn-default').value =null;
        document.getElementById('btn-default-back').value =null;
        handleCancleBtn ();
        handleCancleBtnBack();
        props.functionCloseform();
    }
    const handleSubmitAddProduct=(e)=>{
        e.preventDefault();
        const input  = document.getElementById('btn-default').files[0];
        const input2 =document.getElementById('btn-default-back').files[0];
        const  published = document.getElementById('published').value.trim()
        let formData = new FormData();
        
        formData.append('title',formDataProduct.title)
        formData.append('slug',formDataProduct.slug)
        formData.append('price',(formDataProduct.price))
        formData.append('imgProduct',input)
        formData.append('imgProduct2',input2)
        formData.append('synopsis',formDataProduct.synopsis)
        formData.append('language',formDataProduct.language)
        formData.append('originalPrice',(formDataProduct.originalPrice))
        formData.append('isbn',formDataProduct.isbn)
        formData.append('pageNumber',(formDataProduct.numberOfPage))
        formData.append('author',formDataProduct.author)
        formData.append('status',published)
        formData.append('quantity',(formDataProduct.quantity))
       
        console.log(input)


        axiosInstance.post('create/',formData).then((response)=>{
            console.log(response)
        })
    }

    console.log(checkbox)
    return(
        <div id="form" className ="conotain-add-product" >
            <span className="text-new-product">New Product</span>
            <div id="close-window" className="close-window"onClick={handleClikClose}>+</div>
            <div className="contain-left-right-add-product">
              <div className ="contain-left-add-product">
                  <div className ="item-left-add-product">
                      <span>Title</span>
                     <input type ="text" required={true} id="title"  name="title" onChange={handChangeAddproduct}/>
                  </div>

                  <div  className ="item-left-add-product ">
                      <span>Synopsis</span>
                      <textarea id="synopsis" placeholder="synopsis..." className="synopsis" required={true}  name="synopsis" onChange={handChangeAddproduct}></textarea>
                  </div>

                  <div  className ="item-left-add-product">
                      <span>Original Price</span>
                     <input id="originalPrice" type ="number" required={true} maxLength="3"   name="originalPrice" onChange={handChangeAddproduct}/>
                  </div>

                  <div  className ="item-left-add-product">
                      <span>Number of Pages</span>
                     <input id="numberOfPage" type ="number" required={true} maxLength="3"   name="numberOfPage" onChange={handChangeAddproduct}/>
                  </div>

                  <div  className ="item-left-add-product">
                      <span>ISBN</span>
                     <input id="isbn" type ="number" required={true} maxLength="10"   name="isbn" onChange={handChangeAddproduct}/>
                  </div>

                  <div  className ="item-left-add-product">
                      <span>Author</span>
                     <input id="author" type ="text" required={true} name="author" onChange={handChangeAddproduct}/>
                  </div>

                  <div  className ="item-left-add-product">
                     <div className='languages'>
                        <span>Language</span>
                        <input id="thai" type="radio"  name="language"   onClick={handleClickLanguage} value="thai" />
                        <label>Thai</label>
                        <input id="english" type="radio"  name="language" onClick={handleClickLanguage} value="english" />
                        <label>English</label>
                     </div>
                  </div>


                  <div  className ="item-left-add-product">
                      <span>Price</span>
                      <input id="price" type ="number" required={true} maxLength="3"   name="price" onChange={handChangeAddproduct}/>
                  </div>

                  <div  className ="item-left-add-product">
                      <span>Quantity</span>
                      <input id="quantity" type ="number" required={true} min="1"max ="999"  name="quantity" onChange={handChangeAddproduct}/>
                  </div>
             </div>
             <div className ="contain-right-add-product">

                  <div  className ="item-right-add-product">
                      <span>Add Image</span>
                          <div className="wrapper ">
                              <div className="image-add-product">
                                  <img src = {viewImg} id="previewImg"/>
                              </div>

                              <div className="content">
                                  <div className="icon-upload-add"><img src ={picUpload.pic}/></div>
                                  <div className="text-no-file">{picUpload.text}</div>
                              </div>
                              <div  id="btn-cancle" onClick={handleCancleBtn}><img src ={iconCancle}/></div>
                          </div>
                      <input   type ="file" accept="image/*"  hidden ={true}  name="image" onChange={handlechange} id="btn-default"/>   
                      <div id="btn-click-upload">
                          <label style={{cursor:'pointer'}} htmlFor="btn-default">choose a file</label>
                     </div>
                  </div>
                  {/**------------------------------------------BackImage----------------------*/}
                  <div  className ="item-right-add-product">
                          <div className="back-wrapper ">
                              <div className="image-add-product">
                                  <img src = {backViewImg} id="backviewImg"/>
                              </div>

                              <div className="content">
                                  <div className="icon-upload-add"><img src ={backPicUpload.pic}/></div>
                                  <div className="text-no-file">{backPicUpload.text}</div>
                              </div>
                              <div  id="btn-cancle-back" onClick={handleCancleBtnBack}><img src ={iconCancle}/></div>
                          </div>
                      <input   type ="file" accept="image/*"  hidden ={true}  name="image" onChange={handlechangeBack} id="btn-default-back"/>   
                      <div id="btn-click-upload">
                          <label style={{cursor:'pointer'}} htmlFor="btn-default-back">choose a file</label>
                     </div>
                  </div>


                  <div  className ="item-right-add-product">
                      <div className='wrapper-checbox'>
                            <span>published</span>
                            <label className="switch">
                                <input  type="checkbox"   onChange={chechBox}
                                value ={checkbox ? "on":"off"} name="published" id ="published"/>
                                <span className="slider round"></span>
                            </label>
                      </div>
                     
                  </div>

                  <button type="submit" className="create-product-submit" onClick={handleSubmitAddProduct}>Create</button>
             </div>
            </div>
        </div>
    )
}

export default AddProduct;







