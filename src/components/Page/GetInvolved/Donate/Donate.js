import {React,  Component }from 'react'
import './Donate.css'
class InvolvedDonate extends Component {
    state={
        isOpen: false,
        btnOpen:'more'
    }
    openHandler= () =>{
        const less=this.state.isOpen
       
        this.setState({isOpen:!less})
        console.log(less);
        if(!less)
            this.setState({btnOpen:'less'})  
        else
        this.setState({btnOpen:'more'})  
    }
    render(){
        return (
            <div className="involved-donate">

                <div className="involved-donate-item">
                <div className="involved-donate-item--1">
                    
                </div>
                <div className="involved-donate-item--2"> 
                    
                </div>
                <div className="involved-donate-item--3"> 
                   
                </div>
                <div className="involved-donate-item--4"> 
                    
                </div>
    
    
    
            </div>
    
    </div>
    
             
           
        )
    }
   
}
export default InvolvedDonate