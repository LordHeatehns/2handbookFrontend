
import './App.css';
import React , { Component, Fragment ,useState } from 'react';
import { Route , BrowserRouter as Router, Switch } from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import DropdownUser from './Components/DropdownUser';
import FrontPage from './Components/FrontPage';
import Header from './Components/Header';
import Login from './Components/Login';
import Logout from './Components/Logout';
import MyProduct from './Components/MyProduct';
import SignUp from './Components/SignUp';
import DetailAndSale from './Components/DetailAndSale';
import TestThunk from './Components/TestThunk';
import Cart from './Components/cart/Cart';
import CartItem from './Components/cart/cartItem/CartItem';
import Search from './Components/search';
import RatingStars from './Components/RatingStar';
import CropImage from './Components/CropImage';
import Manga from './Components/categories/Manga';
import Novel from './Components/categories/Novel';
import Article from './Components/categories/Article';
import Knowlewdge from './Components/categories/Knowledge';
import Comic from './Components/categories/Comic';
import Education from './Components/categories/Education';

export const truncate=(str, num)=> {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}



class App extends Component {
  render() {
    return(
      <div > 
        <Router>
            <Header/>
            <Switch>
              <Route path ='/login' component ={Login}/>
              <Route path ='/signup' component ={SignUp} />
              <Route exact path ='/detail/:slug' component ={DetailAndSale} />
              <Route exact path ='/' component ={FrontPage}/>
              <Route exact path ='/my-product' component = {MyProduct} />
              <Route exact path ='/add-product' component = {AddProduct} />
              <Route exact path ='/logout' component = {Logout} />
              <Route path ='/dropdown' component = {DropdownUser} />
              <Route path ='/test/:slug' component = {TestThunk} />
              <Route path='/cartItem' component={CartItem} />
              <Route path='/cart' component={Cart} />
              <Route path= '/search' component={Search} />
              <Route path= '/ratingstar' component={RatingStars} />
              <Route path= '/crop' component={CropImage} />
              <Route path='/categories/Manga' component = {Manga} />
              <Route path='/categories/Novel' component = {Novel} />
              <Route path='/categories/Article' component = {Article} />
              <Route path='/categories/Knowledge' component = {Knowlewdge} />
              <Route path='/categories/Comic' component = {Comic} />
              <Route path='/categories/Education' component = {Education} />
             
              
              
              
            </Switch>
       </Router>

      </div>
    )
  }
}



export default App ;