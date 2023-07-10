import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}) {
    const[state,dispatch]=useStateValue();
    const addtobasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });

    };
    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <small>$</small>
                <strong>{price}</strong>
                <div className='product_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addtobasket}>Add to Basket</button>
        </div>
    )
}

export default Product;