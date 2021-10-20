import React, { useRef } from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import Aux from '../../../hoc/Auxi/Auxilliary'
import AutoScroll from '../AutoScroll/AutoScroll'
import './toolbar.css'
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
// General scroll to element function
const Toolbar = (props) => {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
    return (
      <Aux>
        
         <header className="Toolbar">
     
            <DrawToggle clicked ={props.toggle} />
              
              <Logo />
              
              
              <nav className="DesktopOnly">
                <NavigationItems />
              </nav>
              <div ref={myRef}></div> 
              <button className="auto-scroll-top" onClick={executeScroll}>
                
                <WhatsAppIcon  style={{fontSize:'60px'}}/>
               </button> 
              {/* <AutoScroll /> */}
          </header>
       
      </Aux>
   )
}
export default Toolbar