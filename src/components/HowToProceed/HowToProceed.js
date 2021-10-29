import React from 'react'
import './HowToProceed.css'
import Aux from '../../hoc/Auxi/Auxilliary'
import img2 from '../../assets/AupairFotos/pexels-kamaji-ogino-5093684.jpg'



const HowToProceed = () => {
    
    return (
        <Aux>
            <h1 className="how">How to proceed</h1>
        <div className="how-to-proceed">
            
           
            <div className="how-to-proceed-holder">

                <div className="how-to-proceed-subholder1">
                    Elegibity 
                </div>
                <div className="how-to-proceed-subholder2">
                    Service
                </div>
                <div className="how-to-proceed-subholder3">
                
                    Application form
 
                </div>
                <div className="how-to-proceed-subholder4">
                 Review 


                </div>
            </div>
            
            <div className="how-to-proceed-content">
                
           <img src={img2} alt="How to proceed" />
            <p>             
                There are different types of Services  our Center offers. Every type of service has its specific conditions 
                Bevore you apply for a specific programm  you need to know wich type of  programm is  suitibale to you.
                The eligibility check and our advisor help how to get the right choose.  In case of hesitation please contact our team in order to avoid any mistakes.
            </p>
            </div>
             

        </div>



        </Aux>
        

         
       
    )
}
export default HowToProceed