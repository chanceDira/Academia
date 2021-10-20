import React from 'react'
import './Contact.css'
import GetInTouch from './GetInTouch/GetInTouch'


const ContactAkagera = () => {
    return (
        <div className="contact-akagera">
            <div className="contact-akagera-item">
         
              <GetInTouch />
            </div>
            <div className="contact-akagera-item-map">
                   <h2>Information</h2> 
                   <h3 style={{fontSize:'18px'}}>E-mail</h3> 
                   <p style={{fontSize:'14px',color:'rgba(39, 37, 37, 0.548)'}}>info@akagera.com</p>
                   <h3 style={{fontSize:'18px'}}>Phone</h3> 
                   <p style={{fontSize:'14px',color:'rgba(39, 37, 37, 0.548)'}}>+250789383982</p> 
                   <h3 style={{fontSize:'18px'}}>Address</h3> 
                   <p style={{fontSize:'14px',color:'rgba(39, 37, 37, 0.548)'}}>Kigali, Rwanda</p>            
           
            </div>

        </div>



         
       
    )
}
export default ContactAkagera