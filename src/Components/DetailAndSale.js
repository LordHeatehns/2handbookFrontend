import { useReducer, useState ,useEffect} from 'react';
import '../CssComponents/DetailAndSale.css'
import axiosInstance from "../axios";
import { useParams } from "react-router";
import { connect } from 'react-redux';
import { addToCart } from '../redux/shopping/Shopping-action';
import RatingStars from './RatingStar';




const DetailAndSale=({ addToCart })=>{
    const [count,setCount] = useState(1);

    const reducer = (state,action)=> {
        switch (action.type) {
            case "ADD" :
                return state + 1
            case "SUB"  :
                return state > 0 ? state - 1 :state - 0 ;
        
        }
    }

    const [result,dispatch] = useReducer(reducer,count)

    const { slug } = useParams();
    const [data,setData] =useState({ page:[] });

    useEffect(()=>{
        axiosInstance.get(`details/${slug}/`).then((response)=>{
            setData({page:[response.data]});
            console.log(response.data)

        })
    },[setData]);
    
    const handleOnClickImage=(e)=> {
        const picBig = document.getElementById('pic-big')
        console.log(e.target.src)
        picBig.src = e.target.src
    }
    

    return(
    <div className="container-detail-and-sale">
        {data.page.map((i)=>{
            return(
                <div key={i.id}  className="box-1">
                    <div className="pic-item">
                        <img className="pic-big" id='pic-big' src={i.imgProduct}/>
                        <div className="all-pic-small">
                            <img className="pic-small" onClick={handleOnClickImage} src={i.imgProduct}/>
                            {i.imgProduct2 ?  <img className="pic-small" onClick={handleOnClickImage}  src={i.imgProduct2}/>:null}
                           
                        </div>
                    </div>
                    <div className ="sale-item">
                        <h2 className="text-h2">{i.title}</h2>
                        <p className="dealer">Dealer:&nbsp;&nbsp;&nbsp;<span style={{"color":" rgb(89, 226, 130)"}}>{i.code.producer.user_name}</span></p>
                        <div className="sale-price">
                            <h4 className="tag-price">Price.</h4>
                            <h2 className="prices">฿{i.price}</h2>
                            <div className="container-add-product">
                             <button className="btn-plus" onClick={()=>dispatch({type:"ADD"})}>+</button>
                             <button className="btn-result">{result}</button>
                             <button className="btn-minus" onClick={()=>dispatch({type:"SUB"})}>-</button>
                            </div>
                        </div>
                        <button onClick={()=>addToCart(i.id,result)} className="btn-add-to-bag">Add to Bag</button>
                        <div className="line"></div>
                        <h3 className="topic-synopsis">Synopsis</h3>
                        <p className="p-synopsis">{i.synopsis}</p>
                    </div>
     
                    <div className="detail-item">
                        <table>
                            <thead>
                            
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>ISBN</td>
                                    <td>{i.isbn}</td>
                                </tr>

                                <tr>
                                    <td>Author</td>
                                    <td>{i.author}</td>
                                </tr>

                                <tr>
                                    <td>Language</td>
                                    <td>{i.language}</td>
                                </tr>

                                <tr>
                                    <td>Original Price</td>
                                    <td>฿{i.originalPrice}</td>
                                </tr>

                                <tr>
                                    <td>Number of Pages</td>
                                    <td>{i.pageNumber} (page)</td>
                                </tr>
                                
                            </tbody>
                            
                        
                        </table>
                        <div className='detail-rating'>
                            <RatingStars size={30} />
                        </div>
                    </div>
                    
                </div>
                
            )
        })}
    </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addToCart:(id,firstQTY) =>dispatch(addToCart(id,firstQTY)),

    }
}

export default connect(null,mapDispatchToProps)(DetailAndSale) ;