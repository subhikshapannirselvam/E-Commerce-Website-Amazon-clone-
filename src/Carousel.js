import React from 'react';
import './Carousel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Repeat } from '@mui/icons-material';
const arrowStyle = {
  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    background: 'gray',
    border: '2px solid white',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '24px',
    color: 'white',
    position: 'absolute',  // Position the arrow absolutely
    top: '50%',  // Place the arrow vertically in the middle
    zIndex: 1,  // Set a higher z-index to make the arrow appear on top
   };
function SampleNextArrow(props){
  const{className,style,onClick}=props;
  return(
    <div className={className} style={arrowStyle} onClick={onClick}></div>
  )
}
function SamplePrevArrow(props){
  const{className,style,onClick}=props;
  return(
    <div className={className} style={arrowStyle}onClick={onClick}></div>
  )
}
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>
    
  };

  return (
    <div>
      <Slider className='carousel' {...settings}>
      <div>
          <img className='images' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/MotionHero2023/3000x1200_Cheer-Up_V1._CB601144149_.jpg" alt="" />
        </div>
        <div>
          <img className='images'src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Mushtaq/PC_Hero_3000x1200_Prime_dec0.5x._CB603869703_.jpg" alt="" />
        </div>
        <div>
          <img className='images' src="https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/iQOONeo7Pro/4July/Prebook/Now/D87160970_PC_Hero_3000x1200_morning._CB600937160_.jpg" alt="" />
        </div>
        <div>
          <img className='images' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Madhav/June/D7642207n0_Hero_3000x1200._CB601293326_.jpg" alt="" />
        </div>
        </Slider>
    </div>
  );
};

export default Carousel;
