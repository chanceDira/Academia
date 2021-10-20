import React, { forwardRef } from 'react'
import {Link} from 'react-router-dom'
import Aux from '../../LayoutSProcess/Layout'
import Footer from '../../../Footer/NewFooter'
import './StudyingProcessFront.css'
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
                    <img src='https://cdn.pixabay.com/photo/2017/08/01/00/38/man-2562325_960_720.jpg' alt="ourstory" />
                    <Link to="/language-process-start"><div className = "check-elig-btn">Check Eligibility</div></Link>
                </div>
                
                </div>
                <div className="our-language-process-item">
                <h3>About Studying </h3>
            
                <p>
                    There were a total of 20,359 courses at universities in Germany in the 2020/2021 winter semester, 18,745 of which were Bachelor's or Master's courses. Bachelor and master courses were introduced as part of the Bologna process. 
                    According to preliminary information, in the winter semester 2020/2021 there were a total of 423 higher instiutute in Germany among them 108 universities.
                    In order for you to be able to apply for an admission you want and which fits your profile, you need to know what you want to study. If you doubt, let our team advise you. We support you to find the faculity and the high institute or university which meets your expectations. We support you through the application processes up to successful admission and enrollment.
                </p>
               
                </div>
             </div>
            
            
        </div>
        <Footer />
        </Aux>
    )
    
})
export default LanguageProcessFront