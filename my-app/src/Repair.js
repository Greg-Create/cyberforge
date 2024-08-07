import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Repair() {
  return (
    <div className="About" id="repairs">
    <div className="about_left">
    <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>

        <h1>We will <span className="highlight">Repair</span> your Computer <br/> and/or install any <span className="highlight">Upgrades</span></h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>
        <div className="redirectButton">Repairs</div>
        </ScrollAnimation>
    </div>
    <div className="about_right">
    <img src="/cpu-install.jpg"/>

    </div>
    </div> )
}
