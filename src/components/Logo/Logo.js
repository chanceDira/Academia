import React from 'react'
import {Link} from 'react-router-dom'
import burgerLog from '../../assets/Logo/logo1.png'
import './Logo.css'
const logo = (props) => (

    
    <Link to="/posts"><div className= 'Logo' ><img src ={burgerLog} alt ="MyBurger" style={{ height:'110px', width:'200px'}} />
</div></Link>
)
export default logo