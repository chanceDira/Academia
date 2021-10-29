import React from 'react';
import Aupair from './Aupair/Aupair'
import Academy from './Academy/Academy'
import './CenterAupairAcademy.css'
import Center from './Center/Center'
import Aux from  '../../hoc/Auxi/Auxilliary'
const CenterAupairAcademy = () => {
 
        return (
      
          <Aux>
              <div className="container1">
        
               <Center />
               <Aupair />
              <Academy />
            </div>
          </Aux>
         
          
             
  
      )
  }
  export default CenterAupairAcademy
 


                


    
