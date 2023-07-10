import Carousel from './Carousel';
import React from 'react'
import Product from './Product';
import './Home.css'
function HomePage() {
  return (
    <div className="home">
    <div className="home_container">
      <Carousel/>
      

      <div className="home_row">
        <Product
          id="1"
          title="VIOMI SE Robot Vacuum Cleaner and Mop with Intelligent Laser Navigation, 2200Pa Strong Suction, 200ml Smart Water Tank, 3200mAH Long Lasting Battery(Black)"
          price={21199}
          rating={4}
          image="https://m.media-amazon.com/images/I/61Y7pNpRy7L._SX679_.jpg"
        />
        <Product
          id="2"
          title="truke Buds BTG 1 Bluetooth Truly Wireless Gaming in Ear Earbuds with (ENC) & Quad MEMS Mic for Clear Calls"
          price={999}
          rating={4}
          image="https://m.media-amazon.com/images/I/51+3lScSWqL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="3"
          title="Miss Marple – Miss Marple and Mystery: The Complete Short Stories (Miss Marple)"
          price={182.59}
          rating={4}
          image="https://m.media-amazon.com/images/I/5102UeZpfRL.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="4"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={299}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="5"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={770}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="6"
          title="Samsung 138 cm (55 inches) Crystal 4K Series Ultra HD Smart LED TV UA55AUE60AKLXL (Black)"
          price={44990}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Y9XnzBHTL._SY300_SX300_QL70_FMwebp_.jpg"
        />
        
      </div>

      

      
    </div>
  </div>
);
}
export default HomePage
