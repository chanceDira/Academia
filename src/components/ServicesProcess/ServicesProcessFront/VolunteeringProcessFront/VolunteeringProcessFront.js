import React, { forwardRef } from 'react'
import {Link} from 'react-router-dom'
import Aux from '../../LayoutSProcess/Layout'
import Footer from '../../../Footer/NewFooter'
import './VolunteeringProcessFront.css'
const LanguageProcessFront = forwardRef(({ onBackClick }, ref) => {

    return (
        <Aux>
            
        <div ref={ref} >
            <div className="language-process-header">
            <h1 className="language-process-front">Choosing  a service—Career Abroad</h1>
            </div>

             <div className="our-language-process-container">
            
                <div className="our-language-process-item--1">
                  <div className="our-story-item--1">
                    <img src='https://cdn.pixabay.com/photo/2018/12/14/11/55/volunteers-3874924_960_720.png' alt="ourstory" />
                    <Link to="/language-process-start"><div className = "check-elig-btn">Check Eligibility</div></Link>
                </div>
                
                </div>
                <div className="our-language-process-item">
                <h3>About Volunteering </h3>
            
                <p>
                    By choosing the volunteering abroad, you strengthen your personality and develop enormously during this time. You meet new and very different people and get involved with them. By being a volunteer  you can strengthen your independence and your self-confidence. 
                    There are many advantages for  people who want to do a voluntary service. Above all, you can get a taste of various social professions during the volunteering period, gain a lot of experience and, in the best case, find your dream job. 
                    A basic idea of volunteering is the intercultural exchange. Through direct contact with the population, as a volunteer you will develop an awareness on specific sociatal challenges. 
                    You work in social  or youth facilities or other social projects. In contrast to the development service, a voluntary service abroad does not require completed professional training, but only a lot of motivation for social commitment abroad 
                    We guide you to find an volunteering place  that matchs your personality.
                </p>
               
                </div>
             </div>
            
            
        </div>
        <Footer />
        </Aux>
    )
    
})
export default LanguageProcessFront