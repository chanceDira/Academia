import React from 'react'
import {Link} from 'react-router-dom'
import './Services.css'
const OurServices = () => {
    return (
        <div className="our-services">
          
          <div className="education-item">
           <div className="education-item-image">
                </div>
           {/* --------------------Education    */}
            <div className="up">
              Apprenticeship Abroad
            </div>
            <p className="education-item-title">Education Abroad</p>
            <p>An apprenticeship is a system for training a new generation 
               </p>
           
           
           <a href="http://localhost:3004/apprenticeship-process-front"><div className="bottom"> Get Service
                </div></a> 
         </div>
         <div className="education-item">
           <div className="education-item-image--1">
                </div>
             
            <div className="up">
                Language Abroad
             
            </div>
            <p className="education-item-title">Education Abroad</p>
            <p>Find the best language program to become fluent in no time.</p>
           
           
            <Link to="/language-process-front"><div className="bottom"> Get Service </div></Link>
         </div>


         <div className="education-item">
           <div className="education-item-image--2">
                </div>
             
            <div className="up">
                Training Abroad
            </div>
            <p className="education-item-title">Education Abroad</p>
            <p>
            Training is teaching, or developing in oneself or others </p>
            <a href="http://localhost:3004/training-process-front"><div className="bottom"> Get Service
                </div></a>
         </div>

         <div className="education-item">
           <div className="education-item-image--3">
                </div>
             
            <div className="up">
                Studying Abroad
               
            </div>
            <p className="education-item-title">Education Abroad</p>
            <p>By studying abroad, you'll meet people with different upbringings and get widen mind</p>
           
           
            <a href="http://localhost:3004/studying-process-front"><div className="bottom"> Get Service
                </div></a>
         </div>



                {/* --------------------Career    */}


         <div className="education-item">
           <div className="education-item-image--4">
                </div>
             
            <div className="up">
                Aupair Services
            </div>
            <p className="education-item-title">Career Abroad</p>
            <p>Meet an Aupair or Hosting Family with a Beautiful smile here in Aupair Service.  
            </p>
           
           
            <a href="http://localhost:3004/aupair-process-front"><div className="bottom"> Get Service
              </div></a>
         </div>

         <div className="education-item">
           <div className="education-item-image--5">
                </div>
            <div className="up">
              Internship Abroad
            </div>
            <p className="education-item-title">Career Abroad</p>
            <p>An internship is a temporary position with an emphasis on on-the-job training.</p>
           
           
            <a href="http://localhost:3004/internship-process-front"><div className="bottom"> Get Service
              </div></a>
         </div>

         <div className="education-item">
           <div className="education-item-image--6">
                </div>
             
            <div className="up">
              Volunteering Abroad
            </div>
            <p className="education-item-title">Career Abroad</p>
            <p>Volunteering is a voluntary act of an individual or group freely giving time and labour for community service.</p>   
                <a href="http://localhost:3004/volunteering-process-front"><div className="bottom"> Get Service
              </div></a>
         </div>

         <div className="education-item">
           <div className="education-item-image--8">
                </div>
             
            <div className="up">
              Working Abroad
            </div>
            <p className="education-item-title">Career Abroad</p>
            <p>Persons gain work experience while being immersed in a foreign work environment.</p>
           
           
            <a href="http://localhost:3004/working-process-front"><div className="bottom"> Get Service
              </div></a>
         </div>
{/* ----------------------special----------------------- */}
         <div className="education-item">
           <div className="education-item-image--9">
                </div>
             
            <div className="up">
              Business Abroad
            </div>
            <p className="education-item-title">Special Services</p>
            <p>International business refers to the trade of goods, services, technology, capital.</p>
           
           
            <div className="bottom"> Get Service
                </div>
         </div>

         <div className="education-item">
           <div className="education-item-image--10">
                </div>
             
            <div className="up">
              Medical Career
            </div>
            <p className="education-item-title">Special Services</p>
            <p>The provision of what is necessary for a person's health and well-being by a doctor, nurse.</p>
           
           
            <div className="bottom"> Get Service
                </div>
         </div>

         <div className="education-item">
           <div className="education-item-image--11">
                </div>
             
            <div className="up">
              Consultancy
            </div>
            <p className="education-item-title">Special Services</p>
            <p>Here we give you expert advice on consultancy and migration  that you will need abroad.</p>
           
           
            <div className="bottom"> Get Service
                </div>
         </div>


         <div className="education-item">
           <div className="education-item-image--12">
                </div>
             
            <div className="up">
              Interpreter
            </div>
            <p className="education-item-title">Special Services</p>
            <p>An interpreter is a person whose job is to translate what someone is saying into another language.</p>
           
           
            <div className="bottom"> Get Service
                </div>
         </div>

         

        </div>



         
       
    )
}
export default OurServices