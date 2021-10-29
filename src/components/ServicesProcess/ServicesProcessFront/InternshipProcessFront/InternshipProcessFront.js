import React, { forwardRef } from 'react'
import {Link} from 'react-router-dom'
import Aux from '../../LayoutSProcess/Layout'
import Footer from '../../../Footer/NewFooter'
import './InternshipProcessFront.css'
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
                    <img src='https://cdn.pixabay.com/photo/2018/08/22/19/27/nurse-3624463_960_720.jpg' alt="ourstory" />
                    <Link to="/language-process-start"><div className = "check-elig-btn">Check Eligibility</div></Link>
                </div>
                
                </div>
                <div className="our-language-process-item">
                <h3>About Internship </h3>
            
                <p>
                    An internship abroad gives you the opportunity to get to know practical experience. That it is not enough if graduates are crammed full of knowledge until they graduate and then start their job. Today that is usually not enough to get a really good and exciting international job. 
                    In contrast to another job, an internship should be designed in such a way that you work on one or more separate projects. It's much more about the input you bring with you from University and what you will learn in the company or organisation. 
                    Regardless of the area in which you want to get involved, for many it helps enormously to have completed an internship in the company beforehand. 
                    An internship is not only the first step into the company, but also a very good opportunity to start building a professional network. Because even if you join another company afterwards, you can always fall back on the contacts from the internship company, the other interns, the supervisors and possibly even customers and business partners. 
                    Even if at first glance it looks like you are losing time  through an internship, it usually pays off in the long run. Either by getting a job faster after graduation because you have more practical knowledge or because you have already made contacts. 
                    We support you to find an internship that suits your needs.
                </p>
               
                </div>
             </div>
            
            
        </div>
        <Footer />
        </Aux>
    )
    
})
export default LanguageProcessFront