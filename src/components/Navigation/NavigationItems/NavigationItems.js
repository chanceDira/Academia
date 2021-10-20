import React, { forwardRef, useRef } from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import HomeDrop from '../HomeDrop/HomeDrop'
import {Link} from 'react-router-dom'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const NavigationItems = () => {
  const HomeDropRef = useRef()
  function handleBackClick() {
    HomeDropRef.current.scrollIntoView({ behavior: 'smooth' })
}
  return(
    <ul className='NavigationItems'>
        <NavigationItem link ="/" exact> <div className="dropdown">
              <span className="language">Home 
              {/* <ArrowDropDownIcon */}
               {/* /> */}
              </span>
              {/* <div className="dropdown-content">
                <p> <b><HomeDrop ref={HomeDropRef } onBackClick={handleBackClick}  /></b> </p>
                <p>Why us?  </p>
                <p>Choose a Service</p>
                <p>Book a Service  </p>
                <p>Term of use </p>
              </div> */}
            </div> </NavigationItem>

            <NavigationItem link ="/services" exact> <div className="dropdown">
              <span className="language">Services
               {/* <ArrowDropDownIcon /> */}
               </span>
              {/* <div className="dropdown-content">
                <p> Education Abroad  <ArrowRightIcon/></p>
                <p >Career  Abroad <ArrowRightIcon/> </p>
                <p>Special Services  <ArrowRightIcon/> </p>
                <p>Abroad 
                  Interpreter & Translation Services  <ArrowRightIcon/> </p>
                <p>Migration Advisory & Consultancy  <ArrowRightIcon/> </p>
              </div> */}
            </div> </NavigationItem>
      

        <NavigationItem link ="/about" > <div className="dropdown">
              <span className="language">About Us 
              {/* <ArrowDropDownIcon /> */}
              </span>
              {/* <div className="dropdown-content">
            <Link to ="#HomeDrop"><p> Our Vision  </p></Link>    
                <p>Mission  </p>
                <p>Why Akagera & Rhein®? </p>
                <p>Our Team   </p>
                <p>Our Partners </p>
                <p>Terms of use </p>
              </div> */}
            </div> </NavigationItem>
        <NavigationItem link ="/contact">Contact Us</NavigationItem>
        <NavigationItem link ="/involved">Get involved</NavigationItem>
        <NavigationItem link ="/faq">FAQ</NavigationItem>
        
      
    </ul>
  )
}

export default NavigationItems