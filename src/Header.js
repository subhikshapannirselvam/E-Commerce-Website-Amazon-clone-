 import React from 'react'
 import './Header.css';
 import SearchIcon from '@mui/icons-material/Search';
 import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
 import { auth } from './firebase';
 import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
 function Header() {
  const[{basket}]=useStateValue([]);
  console.log(basket);
  
  return (
     <div>
      
        <div className='header' >
            <Link to="/">
        <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
        </Link>
        <div className='search'>
        <input type="text" className='searchinput'/>
        <SearchIcon className='searchicon'/>
        </div>
        <div className='nav'>
          <Link to="/login" className='header_link'>
            <div className='header_option'>
              <span>Hello User</span>
              <span className='bottom'>Accounts and lists</span>
            </div>
          </Link>

          <Link to="/checkout" className='header_link'>
            <div className='header_option'>
              <span>Returns</span>
              <span className='bottom'>& Orders</span>
              
            </div>
          </Link>

          
          <Link to="/checkout" className='header_link'>
            <div className='header_cart'>
              <div className='cart'>
              <ShoppingBasketIcon/>
              <span>
              {basket?.length}</span></div>
            
            <span className='bottom'>cart</span>

            </div>  
          </Link>
        </div>

         
       </div>
     </div>
   )
 }
 
 export default Header
 