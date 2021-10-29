import React from 'react'
import './Contacts.css'
import {Link} from 'react-router-dom'
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const Contacts = () => (
<div className='Contacts'>
    <div className="Tel1">
                <CallIcon style={{fontSize:'15px'}}/>
            </div>
            <div className="Tel">
            +250787259588
            </div>
            <div className="Email1">
                <MailOutlineIcon style={{fontSize:'15px'}}/>
            </div>
            <div className="Email">
                info@akagerarhein.com
            </div>
            <div className="Login">
            <Link to="/login"> Login</Link> 
            </div>
            <div className="Register1">
                Register
            </div>

    </div>

)
export default Contacts