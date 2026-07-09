import React from 'react'
import "./Custom.css"
import "react-multi-carousel/lib/styles.css";
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { useNavigate } from 'react-router-dom';



export default function Custom() {
  const navigate = useNavigate()

  return (
    <div id="custom" className='custom'>
      <div className='custom_left'>
      <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>
        <h1>Work <span className='highlight'>Alongside </span>us <br/><span className='highlight'>Customize</span> your own Computer <br/> and we will <span className='highlight'>Assemble</span> it  </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>
        <div className="redirectButton" onClick={()=>navigate("/contact")}>Custom Pc</div>
        </ScrollAnimation>

        </div>
        <div className='custom_right'>
 <img src="/customComp.avif" alt="Custom computer build"/>
 
 </div>
 </div> 

  )
}
