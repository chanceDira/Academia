import React from 'react'
import './Center.css'

import Aux from '../../../hoc/Auxi/Auxilliary'
// import './style.css'
// import img1 from '../../../assets/slideimg/img2.jfif'

const Center= () => {
    return (
        <Aux>
<div className="item item--1">
<div id="slider">
<div class="slides">
    <div class="slider">
      <div class="legend"></div>
      <div class="content">
        <div class="content-txt">
          <h1>Akagera & Rhein®  Center</h1>
          <h2>Our main activities consist to train our customers in communication skills  </h2>
          <button className="Center">Get Started</button>
        </div>
      </div>
      
      <div class="image">
        <img src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" alt="pic1"/>
      </div>
    </div>
    <div class="slider">
      <div class="legend"></div>
      <div class="content">
      <div class="content-txt">
          <h1>Akagera & Rhein®  Center</h1>
          <h2>Our main activities consist to train our customers in communication skills by setting up school of spoken languages in our area of activities such as: German, 
            French, Kinyarwanda, Swahili, and much more other regional languages by request. </h2>
          <button className="Center">Get Started</button>
        </div>
      </div>
      <div class="image">
        <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg" alt="pic2"/>
      </div>
    </div>
    <div className="slider">
      <div class="legend"></div>
      <div class="content">
      <div class="content-txt">
          <h1>Akagera & Rhein®  Center</h1>
          <h2>Our main activities consist to train our customers in communication skills by setting up school of spoken languages in our area of activities such as: German, 
            French, Kinyarwanda, Swahili, and much more other regional languages by request. </h2>
          <button className="Center">Get Started</button>
        </div>
      </div>
      <div className="image">
        <img src="https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776_960_720.jpg" alt="pic3"/>
      </div>
    </div>
   
    </div>
  </div>
  </div>
        </Aux>
    )
}
export default Center