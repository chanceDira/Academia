import React, { forwardRef, useRef } from 'react'
import {Link} from 'react-router-dom'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import './OurStory.css'
// import './style.css'


const OurStory= forwardRef(({ onBackClick }, ref) => {

    return (
        <div ref={ref} className="OurStory">
            <div className="story-header">
           <Link to ="/Services"><AccountBalanceIcon style={{fontSize:"50px"}} /></Link> 

            <h1 className="OurStory">Our Story</h1>
            </div>
             <div className="our-story-container">
                <div className="our-story-item--1">
                    <img src="https://cdn.pixabay.com/photo/2019/02/15/11/04/book-3998252_960_720.jpg" alt="ourstory" />
                </div>
                <div className="our-story-item">
                <h2>Akagera & Rhein® Center</h2>
                <h3>The Most Personalised Service Provision</h3>
            
                <p>Akagera & Rhein® Center brings together people and promotes the cultural 
                    understanding through   know-how or knowledge exchange and consultance service in 
                    the region of Akagera & Rhein river’s regions. 
                    In Akagera & Rhein® Competence Center  we offer individual solutions tailored to 
                    your requirements in the areas of studying, training, travelling, volunteering, 

                    working, doing business, medical care Abroad and outsourcing of services especially 
                    in the region of Akagera & Rhein rivers. We provide interdisciplinary teams that 
                    take on your challenge and always deliver the best quality. Whether you want
                    advice or consultancy together we will find the right way.
                    <br />  <br />
                    We work with our clients on a variety of dreams, ideas that often require expert 
                    knowledge. We use our experiences and competence to offer adequate solutions.   
                
                    </p>
            
                </div>
             </div>
            
            
        </div>
    )
    
})
export default OurStory