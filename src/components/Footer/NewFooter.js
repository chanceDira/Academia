import React from 'react'
import './NewFooter.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

// import Map from './Map/Map'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-cover">
                <div className="footer-flex">
                    <div className="footer-item"> 
                    <div className="footer-text"> <h3>QTERMS OF USE  </h3></div>
                            <div className="footer-text">
                            Terms & Conditions 

                            </div>
                            <div className="footer-text">
                            Privacy Policy
                            </div>
                            <div className="footer-text">
                            Data Declaration for Customers
                            </div>
                            
                            <pre>
                                < iframe src="//maps.google.com/maps?q=-1.94995,30.05885&z=15&output=embed"></iframe >
                            </pre>
                            
                        
                    </div>

                    <div className="footer-item"> 
                    <div className="footer-text">
                        <h3>CHOOSING A SERVICE </h3></div>
                            <div className="footer-text">
                            Check your Eligibity 
                            </div>
                            <div className="footer-text">
                                Education Abroad 
                            </div>
                            <div className="footer-text">
                                Career  Abroad
                            </div>
                            <div className="footer-text">
                                Education Abroad 
                            </div>
                            <div className="footer-text">                   
                                Special Services  
                            </div>

                            <div className="footer-text">
                                Interpreter & Translation Services 
                            </div>

                            <div className="footer-text">
                                Check your Eligibity 
                            </div>


                            
                    </div> 

                    <div className="footer-item"> 
                    <div className="footer-text"> <h3>Navigation </h3></div>        
                            <div className="footer-text">
                                Home
                            </div>
                            <div className="footer-text">
                                Services
                            </div>
                            <div className="footer-text">
                                About
                            </div>
                            <div className="footer-text">
                                Booking
                            </div>
                            <div className="footer-text">                   
                                Get Involved
                            </div>

                            <div className="footer-text">
                               Contact Us
                            </div>

                            <div className="footer-text">
                                FQA
                            </div>

                    </div> 
                
                </div>
             
                <div className="footer-bottom-social">
            
                    <InstagramIcon />
                    <WhatsAppIcon />
                    <TwitterIcon />
                    <FacebookIcon />
                    <YouTubeIcon />
                    <LinkedInIcon />
                    <SubscriptionsIcon />

                    <br />
                
                </div>
            
                
                <div className="footer-bottom">
                   
                    © 2021 Akagera & Rhein® Competence Center
                </div>
                
                </div>
           
           
        </div>



         
       
    )
}
export default Footer