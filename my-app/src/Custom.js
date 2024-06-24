import React from 'react'
import "./Custom.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    <div className='custom'>
        <h1>Custom PCs</h1>
        <p style={{marginBottom:"3rem"}}>CyberForge will work with you personally, to build your perfect PC, that fits your budget</p>
     
    <div className='images'>
  <div className='carouselItem'><img src="/comp-1.jpg"/></div>
  <div className='carouselItem'><img src="/comp-2.jpg"/></div>
  <div className='carouselItem'><img src="/comp-3.jpg"/></div>
  </div>
  {/* <div className='carouselItem'></div> */}
    </div>
  )
}
