import React from "react";
import "./About.css"
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function About() {
  return (
    <div className="About" id="aboutus">
      <div className="about_left">
      <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>

          <h1><span className="highlight">CyberForge </span>is a small company <br/>located in <span className="highlight">Vaughan</span>, Ontario <br/> we build and sell <span className="highlight">Custom</span> Computers </h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>
          <div className="redirectButton">About Us</div>
          </ScrollAnimation>

      </div>
      <div className="about_right">
      <img src="/comp-3.jpg"/>

      </div>
      </div>
  );
}
