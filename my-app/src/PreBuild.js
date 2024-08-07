import React from 'react'
import "./PreBuild.css"
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function PreBuild() {
  return (
    <div className='prebuild' id="prebuild">
        <div className='prebuild_right'>

 <img src="/comp-2.jpg"/>
 </div>
 
 
      <div className='prebuild_left'>
      <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>

        <h1>Buy a <span className='highlight'>pre-built</span> computer <br/>tailored for your <span className='highlight'>specific</span> needs  </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>

        <div className="redirectButton">Pre-Built</div>
        </ScrollAnimation>

        </div>
    </div>
  )
}
