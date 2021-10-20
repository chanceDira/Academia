import React, { forwardRef } from 'react'
import {Link} from 'react-router-dom'
import Aux from '../../LayoutSProcess/Layout'
import Footer from '../../../Footer/NewFooter'
import './TrainingProcessFront.css'
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
                    <img src='https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg' alt="ourstory" />
                    <Link to="/language-process-start"><div className = "check-elig-btn">Check Eligibility</div></Link>
                </div>
                
                </div>
                <div className="our-language-process-item">
                <h3>About Training </h3>
            
                <p>
                    In 2020 there were 325 recognized Apprenticeship or recognized Pofessional training occupations in Germany.
                    In order for you to be able to apply for an Apprenticeship you want and which fits your profile, you need to know what you want to learn or do. If you doubt, let our team advise you. We support you to become the ideal candidate. We lead through qualification measures up to successful admission to a course. 
                    As Apprentee  your  learned in the company and at vocational school.  At the moment, there is the trend of  the dual study,  which consist with a Apprenticeship in company combined with studying at universities or  higher institute.
                </p>
               
                </div>
             </div>
            
            
        </div>
        <Footer />
        </Aux>
    )
    
})
export default LanguageProcessFront