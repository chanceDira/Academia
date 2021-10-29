import React, { forwardRef } from 'react'
import {Link} from 'react-router-dom'
import Aux from '../../LayoutSProcess/Layout'
import Footer from '../../../Footer/NewFooter'
import './StartEligibility.css'
// import './style.css'


const ServicesProcessStart = forwardRef(({ onBackClick }, ref) => {

    return (
        <Aux>
            
        <div ref={ref} >
            <div className="services-process-header">
           
            <h1 className="services-process-start">Elegibility  Check For Apprenticeship </h1>
            </div>

             <div className="start-eligibility-container">
         
            <div className="start-eligibility-item--1">  
            </div>
                <div className="start-eligibility-item">
                <h3>Apprenticeship Abroad </h3>
            
                <p>
                Start by checking your eligibility to Apprenticeship Abroad 
                You are requested to answer honestly a series of questions that will determine if you are eligible the Apprenticeship Abroad and the more correctly you answer the questions, the better the evaluation of the chance of a successfully application process could be done. Your personal data might be shared exclusively to our employees and partners if necessary, in order to deliver personalized and satisfactory service to you. In any other disclosure should become necessary, we will always ask for your consent. 
                The Eligibility Check and application form questions are directed toward the applicant only. If you fill out the forms on behalf of the applicant, please answer the questions from the applicant’s perspective. 
                Ensure that all provided information is accurate and in line with your official certificates. 
                Akagera & Rhein Center  cannot guarantee a successful outcome in case any data is inaccurate. 

                I have read and understood the information above. 
                </p>
                <Link to="/language-process-starting"><div className="start-check-elig-btn">START</div></Link>  
                </div>
              
             </div>
            
            
        </div>
        <Footer />
        </Aux>
    )
    
})
export default ServicesProcessStart