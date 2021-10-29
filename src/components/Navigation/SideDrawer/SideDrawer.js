import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import'./SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi/Auxilliary';

const sideDrawer = ( props ) => {  
    let attachedClasses = ['SideDrawer', 'Close']
    if(props.open){

        attachedClasses = ['SideDrawer', 'Open']
    }
   
    return  <Aux> 
              
      <Backdrop show ={props.open} clicked= {props.closed} />  
            <div className = {attachedClasses.join(' ')}>
            <div style ={{marginLeft:'95%'}}onClick={props.closed}>X</div>
                    <Logo height ="50px" />  
                    
                <nav>
                    <NavigationItems />
                </nav>
                <div>Login</div>
                <div>Register</div>
               
            </div>
        </Aux>
        }
    

export default sideDrawer;