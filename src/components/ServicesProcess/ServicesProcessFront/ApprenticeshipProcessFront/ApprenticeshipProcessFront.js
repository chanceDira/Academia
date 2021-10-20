import React, { forwardRef } from 'react'
import Aux from '../../LayoutSProcess/Layout'
import Footer from '../../../Footer/NewFooter'
import './ApprenticeshipProcessFront.css'
const ApprenticeshipProcessFront = forwardRef(({ onBackClick }, ref) => {

    return (
        <Aux>
            
        <div ref={ref} >
            <div className="apprenticeship-process-header">
            <h1 className="apprenticeship-process-front">Choosing  a service—Education Abroad</h1>
            </div>

             <div className="our-apprenticeship-process-container">
            
                <div className="our-apprenticeship-process-item--1">
                  <div className="our-story-item--1">
                    <img src='https://cdn.pixabay.com/photo/2016/03/15/09/08/looking-for-a-job-1257233_960_720.jpg' alt="ourstory" />
                    <a href="http://localhost:3004/apprenticeship-process-start"><div className = "check-elig-btn">Check Eligibility</div></a>
                </div>
                
                </div>
                <div className="our-apprenticeship-process-item">
                <h3>About Apprenticeship </h3>
            
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
export default ApprenticeshipProcessFront