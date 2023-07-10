import React from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import { Link,useNavigate } from 'react-router-dom';

import removeFromBasket from './CheckoutProduct';
import { clear } from '@testing-library/user-event/dist/clear';
function Payment() {
    const [{ basket }, dispatch] = useStateValue();

    const clearcart=()=>{
        return dispatch({type:"EMPTY_BASKET"});
    }
    const navigate=useNavigate();
    const navigateHome = () => {
     
        navigate('/');
      };
   

  return (
    <div className='payment'>
        <div className='payment_info'>
            <h1> Payment Successful </h1>
            <h1>✅</h1>
        </div>
          <button
        onClick={() => {
          clearcart();
          navigateHome();
        
        }}>Home</button>



      
    </div>
  )
}

export default Payment
