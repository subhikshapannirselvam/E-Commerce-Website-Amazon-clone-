import React from "react";
import "./CheckoutPage.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {getBasketTotal} from './reducer';
import Payment from './Payment';
import { useNavigate } from "react-router-dom";
function Checkout() {
    const navigate = useNavigate();

    const navigatepage = () => {
      navigate('/payment');
    };
  
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
    

      <div className="subtotal">
        <p className="line1"></p>
      
        
        <span>Subtotal ({basket.length} items) : $ {getBasketTotal(basket)} 
       </span> 
       
       
        <button onClick={navigatepage}>Proceed to Checkout</button>
     
    </div>
      </div>
    </div>

  );
}

export default Checkout;