import React, { forwardRef } from 'react'
import {Link} from 'react-router-dom'
import Aux from '../../LayoutSProcess/Layout'
import Footer from '../../../Footer/NewFooter'
import './AupairProcessFront.css'
const LanguageProcessFront = forwardRef(({ onBackClick }, ref) => {

    return (
        <Aux>
            
        <div ref={ref} >
            <div className="language-process-header">
            <h1 className="language-process-front">Choosing  a service—Education Abroad</h1>
            </div>

             <div className="our-language-process-container">
            
                <div className="our-language-process-item--1">
                  <div className="our-story-item--1">
                    <img src='https://cdn.pixabay.com/photo/2016/11/29/04/16/beach-1867271_960_720.jpg' alt="ourstory" />
                    <Link to="/language-process-start"><div className = "check-elig-btn">Check Eligibility</div></Link>
                </div>
                
                </div>
                <div className="our-language-process-item">
                <h3>About Aupair </h3>
            
                <p>
                    An Aupair  decides to go abroad with the aim of improving the language skills of the host country, in some cases even learning  cultural new things. 
                    A Host family offers an Aupair pocket money, free board and lodging in their own home for the duration of their stay. 
                    In return, the an Aupair helps the Host family with childcare and light household chores. Both the Aupair and the Host family benefit from an Aupair stay. 
                    The Aupair program is the right choice if you want to learn about the way of life of other nations and improve your language skills. You will become more independent through the Aupair program and learn to stand on your own two feet without having to completely renounce the family environment. 
                    By having free board and lodging with your host family, you keep your cost of living relatively low.
                </p>
               
                </div>
             </div>
            
            
        </div>
        <Footer />
        </Aux>
    )
    
})
export default LanguageProcessFront