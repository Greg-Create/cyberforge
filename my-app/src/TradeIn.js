import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import "./TradeIn.css"

export default function TradeIn() {
  return (
    <div className='tradein' id="tradein">
    <div className='tradein_right'>

<img src="/gpu-insert.webp"/>
</div>


  <div className='tradein_left'>
  <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>

    <h1>We will <span className='highlight'>buy</span> your PC or your PC parts </h1>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>
    <div className="redirectButton">Trade In</div>
    </ScrollAnimation>
    </div>
</div>  )
}
