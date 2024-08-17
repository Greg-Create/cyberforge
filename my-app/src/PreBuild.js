import React from 'react'
import "./PreBuild.css"
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { useNavigate } from 'react-router-dom';

export default function PreBuild() {
  const navigate = useNavigate()

  return (
    <div className='prebuild' id="prebuild">
        <div className='prebuild_right'>

 <img src="/customComp2.avif"/>
 </div>
 
 
      <div className='prebuild_left'>
      <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>

        <h1>Buy a <span className='highlight'>pre-built</span> computer <br/>tailored for your <span className='highlight'>specific</span> needs  </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>

        <div className="redirectButton" onClick={()=>navigate("/contact")}>Pre-Built</div>
        </ScrollAnimation>

        </div>
    </div>
  )
}
