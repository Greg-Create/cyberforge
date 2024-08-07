import React from 'react'
import "./Custom.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';



export default function Custom() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div id="custom" className='custom'>
      <div className='custom_left'>
      <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>
        <h1>Work <span className='highlight'>Alongside </span>us <br/><span className='highlight'>Customize</span> your own Computer <br/> and we will <span className='highlight'>Assemble</span> it  </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>
        <div className="redirectButton">Custom Pc</div>
        </ScrollAnimation>

        </div>
        <div className='custom_right'>
 <img src="/comp-1.jpg"/>
 
 </div>
 </div> 

  )
}
