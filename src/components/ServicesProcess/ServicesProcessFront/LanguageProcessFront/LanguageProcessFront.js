import React, { forwardRef } from 'react'
import {Link} from 'react-router-dom'
import Aux from '../../LayoutSProcess/Layout'
import Footer from '../../../Footer/NewFooter'
import './LanguageProcessFront.css'
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
                    <img src='https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936_960_720.jpg' alt="ourstory" />
                    <Link to="/language-process-start"><div className = "check-elig-btn">Check Eligibility</div></Link>
                </div>
                
                </div>
                <div className="our-language-process-item">
                <h3>About language </h3>
            
                <p>
                If you have learned a language up to a level and you wish to accelerate and improve your skills and gain international experience, it is essential to go to the countries where the language has its origins. 
If you decide to learn a language abroad, it means that you wish to develop yours soft skills much faster and more naturally than at home. You learn to communicate and to have access to interact with native speaker in your daily life, because you deal with them every day and thus immerse yourself deeper in ist culture. 
In order for you to be able to apply for an suitable course you want and which fits  to your profile, you need our support. Let our team advise you. We support you to finde  the ideal course. We lead your through application processus up to the successful admission to a course abroad.
                </p>
               
                </div>
             </div>
            
            
        </div>
        <Footer />
        </Aux>
    )
    
})
export default LanguageProcessFront