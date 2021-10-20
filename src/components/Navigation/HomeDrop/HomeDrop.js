import React, { forwardRef, useRef } from 'react'
import {Link} from 'react-router-dom'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import './HomeDrop.css'
// import './style.css'


const HomeDrop= forwardRef(({ onBackClick }, ref) => {

    return (
        <div ref={ref} className="HomeDrop">
            <div className="story-header">
           <Link to ="/ourstory">Our Story</Link> 
           <Link to ="/ourteam">Our Team</Link> 
           <Link to ="/involved">Involved</Link> 
            </div>
            

            
            
        </div>
    )
    
})
export default HomeDrop