import React from 'react'
import AcademyPic from '../../../assets/AcademyFoto/pexels-fauxels-3184163.jpg'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import './Academy.css'
import Aux from '../../../hoc/Auxi/Auxilliary'

const Academy = () => {
    return (
      <Aux>
      <div className="item item--3">
      <figure className="wgh-slider-item-figure">
      <div id="slider">
      <div class="slides">
          <div class="slider">
            <div class="legend-academy"></div>
            <div class="content">
              <div class="content-txt">
                <h1>ACADEMY</h1>
                
                <button className="Center">Get Started</button>
              </div>
            </div>
            
            <div class="image-academy">
              <img src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg" alt="pic1"/>
            </div>
          </div>
          <div class="slider">
            <div class="legend-academy"></div>
            <div class="content">
            <div class="content-txt">
                <h1>ACADEMY</h1>

              </div>
            </div>
            <div class="image-academy">
              <img src="https://cdn.pixabay.com/photo/2016/11/08/05/10/students-1807505_960_720.jpg" alt="pic2"/>
            </div>
          </div>
          <div className="slider">
            <div class="legend-academy"></div>
            <div class="content">
            <div class="content-txt">
            <h1>ACADEMY</h1>
               
              </div>
            </div>
            <div class="image-academy">
              <img src="https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776_960_720.jpg" alt="pic3"/>
            </div>
          </div>
         
          </div>
        </div>
        <figcaption className="wgh-slider-item-figure__caption"> <a href="/aupair">
        <div className="aupair-link">
          Akagera & Rhein® Academy
        </div>
        </a> <br /><a href="/aupair">  <span style={{color:'white'}}>Visit Website <OpenInNewIcon /><i class="fa fa-external-link" aria-hidden="true"></i></span> </a></figcaption>

        </figure>
        </div>
              </Aux>
    )
}
export default Academy