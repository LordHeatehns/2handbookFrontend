
import React, { useCallback } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'
import { useState } from "react/cjs/react.development";
import '../CssComponents/CropImage.css'
import axiosInstance from '../axios';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import  logoUser from '../Image/headerLogo/user-solid.svg';
import { Redirect } from 'react-router-dom';





const CropImage=()=>{
   const [src,setSrc] = useState(null);
   const Iconupload = <FontAwesomeIcon className='icon-upload' icon={ faArrowAltCircleUp} />
   const handleFileChange = (e)=>{

     if (e.target.files[0]) {
      setSrc(URL.createObjectURL(e.target.files[0]))
     }

     else {
       //
     }
     
   }
  
const [image,setImage] =useState();
const [crop,setCrop] = useState({ aspect:16 / 9});
const [result,setResult] =useState(null);





    function base64StringtoFile (base64String, filename) {
      var arr = base64String.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, {type: mime})
    }
    
    function getCroppedImg() {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");

      // New lines to be added
      const pixelRatio = window.devicePixelRatio;
      canvas.width = crop.width * pixelRatio;
      canvas.height = crop.height * pixelRatio;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.imageSmoothingQuality = "high";

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );
      
        // As Base64 string
        // const base64Image = canvas.toDataURL("image/jpeg");
        // return base64Image;
      
        // As a blob

      const base64Image = canvas.toDataURL('image/jpeg')
      setResult(base64Image)
      console.log(base64Image)
      

      const myNewCroppedFile = base64StringtoFile(base64Image, 'jojo.png')
      console.log(myNewCroppedFile)

        const formData = new FormData();
        formData.append("image", myNewCroppedFile);
        axiosInstance.post('update/image/', formData).then((resoponse)=>{
          console.log(resoponse)
          window.location.reload();
        
        })

      
        // download file

    }

    const onLoad = useCallback(img => {
      
      console.log(img)
      const aspect = 9 / 9
      const width = img.width / aspect < img.height * aspect ? 50 : ((img.height * aspect) / img.width) * 50
      const height = img.width / aspect > img.height * aspect ? 50 : (img.width / aspect / img.height) * 50
      const y = (100 - height) / 2
      const x = (100 - width) / 2
    
      setCrop({
        unit: '%',
        width,
        height,
        x,
        y,
        aspect,
        
      })
      setImage(img)
    
      return false // Return false if you set crop state in here.
    }, [])



  
   return(
     <div className='contain-crop'>
        <input type="file" id='image' accept='image/*' onChange={handleFileChange} />
        <label htmlFor='image'>{Iconupload}</label>

        <div className='crop'>
           {src == null ?   <img className='logo-user' src={logoUser}></img>:null}
           {src && <div className='reactCrop'> <ReactCrop   src={src} onImageLoaded={onLoad}   crop ={crop} onChange={setCrop}/></div>}

        </div>
        <button onClick={getCroppedImg}>Confirm</button>
     </div>
   )

}


export default CropImage;