import React from 'react'
import AupairPic from '../../../assets/AupairFotos/pexels-kamaji-ogino-5093684.jpg'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import './Aupair.css'
const Aupair = () => {
    return (
    

<div className="item item--2">
<figure className="wgh-slider-item-figure">
      <div id="slider">
      <div class="slides">
          <div class="slider">
            <div class="legend-academy"></div>
            <div class="content">
              <div class="content-txt">
                <h1>AUPAIR</h1>
              </div>
            </div>
            
            <div class="image-academy">
              <img src="https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500_960_720.jpg" alt="pic1"/>
            </div>
          </div>
          <div class="slider">
            <div class="legend-academy"></div>
            <div class="content">
            <div class="content-txt">
                <h1>AUPAIR</h1>
              </div>
            </div>
            <div class="image-academy">
              <img src="https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028_960_720.jpg" alt="pic2"/>
            </div>
          </div>
          <div className="slider">
            <div class="legend-academy"></div>
            <div class="content">
            <div class="content-txt">
                <h1>AUPAIR</h1>
              </div>
            </div>
            <div class="image-academy">
              <img src="https://cdn.pixabay.com/photo/2014/09/26/09/33/girls-462072_960_720.jpg" alt="pic3"/>
            </div>
          </div>
         
          </div>
        </div>
        <figcaption className="wgh-slider-item-figure__caption"> <a href="/aupair">
        <div className="aupair-link">
          Akagera & Rhein® Aupair Service
        </div>
        </a> <br /><a href="/aupair">  <span style={{color:'white'}}>Visit Website <OpenInNewIcon /><i class="fa fa-external-link" aria-hidden="true"></i></span> </a></figcaption>

        </figure>
</div>

       
    )
}
export default Aupair