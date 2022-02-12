import '../CssComponents/Bgloading.css'
const BgLoading =()=>{
    return(
        <div className="contain-bgloading">
              <h2>Loding <span className="awaiting-animation"></span></h2>
              <div className="loader"></div>
        </div>
    )
}


export default BgLoading;