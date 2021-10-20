import {React,  Component }from 'react'
import {Link} from 'react-router-dom'
import './GetInvolved.css'
import Donate from './Donate/Donate'
class InvolvedAkagera extends Component {
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
            <div className="involved-akagera">

                <div className="involved-akagera-item">

                <div className="involved-akagera-item--1">
                    <img className="image-involved" src="https://cdn.pixabay.com/photo/2015/04/20/13/41/person-731479_960_720.jpg" Alt="Ability" /> 
                </div>
                <div className="involved-akagera-item--2">
                    <h1>Work with us </h1> 
                    <p>
                        As an individual (As a Mentor/Coach, As a volunteer, As a host, as a cultural guide) 
                        <br />As a <b>professional</b> (Tourist Guide, language teacher, interpreter and translator, Migration’s advisor, business expert, Lawyer, other expertise) 
                        <br />As a <b>private company</b> (education, Health, hospitality, technic,
                        & technology, agriculture, culture and sport, others) 
                        <br />As a<b> public Institution</b>  (education, Health, hospitality, technic, & technology, agriculture, culture and sport, others) 
                        <br />As an <b> Institution </b>(Embassy, Consulate, Education other government institution, international institution, others) 
                        <br />As an <b>organisation</b> (Association, cooperative, NGO, church, syndicate, others) 
                    </p>
                    <Link to="/login-involved"><button type="submit" class="btn btn-primary" >Get Involved</button></Link>
                 
                </div>
                
    
            </div>
            <Donate />
    
    </div>
    
             
           
        )
    }
   
}
export default InvolvedAkagera