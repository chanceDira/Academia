import React, {Component} from 'react'
import Select from './EligibilityItem/EligibilityItem'
import SelectOne from './EligibilityItem/EligibilityItemOne'
import './EligibilityForm.css'
class Eligibility extends Component{
    state={
        cname:"",
        other:"other-input-disabled",
        otherL:"other-input-disabled",
        second:"izere",
        othername:'other',
        otherClass:'other-input-disabled',
        otheLClass:'other-input-disabled',
        dis:"disabled",
        otherValue:"hello"

        
        
    }
noHandleChange = e => {

    const { name, value } = e.target;
    console.log(value)
    this.setState({

        cname: value,
        dis:"disabled"
        
        

    });
   
    };
    yesHandleChange = e => {

        const { name, value } = e.target;
        console.log(value)
        this.setState({
    
            cname: value,
            dis:"disabled"
            
            
    
        });
       
        };
otherhandleChange = e => {
    
    const { name, value } = e.target;
    
    this.setState({
        cname: value
        
    });
    };
otherChange = e => {
 
    const { name, value } = e.target;
    console.log(value)
    this.setState({
        cname:value,
        onother: value,
        dis:"ok",
        otherClass:"other-input"

        
    });
    };

   otherLChange = e => {
       

        const { name, value } = e.target;
        
        this.setState({
        
            otheLClass:"other-input"
    
            
        });
        };
render(){
    const box = {
        color: "green",
        fontSize: '23px',
        width:'300px',
        
    }

    return(
        <div>
           
             <div> 
             <h1> Check Elegibility of Language</h1>
                 <Select 
                    name={this.state.name}
                    question="Do you have a high school diploma or certificate? "
                    other={this.state.othername}
                    noChange={this.noHandleChange}
                    yesChange={this.yesHandleChange}
                    otherchange={this.otherChange}
                    input ={
                    <input type="text"
                            onChange={this.otherhandleChange}
                            placeholder={this.state.onother}
                            {...this.state.dis}
                           
                            className={this.state.otherClass}
                        /> }
                    />
             </div>

            
             <div>   <Select 
                    name="university "
                    question="Did you do university studies? "
                     
                    /></div>
             <div> <Select name="oneyear "
                    question="Did you completed successfully one year of  university?  "/></div>
             <div> <Select name="bachelor "
                    question="Did you have a Bachelor Degree?  "/></div>
             <div> <Select name="masters "
                    question="Did you have a Master degree?  "/></div>
             <div> <Select name="German "
                    question="Do you have a German language certificate? ? "/></div>
             <div> <Select name="llavel "
                    question="Which language level do you reached? "/></div>
            <div>
                <SelectOne
                    otherLchange={this.otherLChange}
                    question="Did you have knowledge of foreign languages?" 
                    otherL={this.state.otherL}
                    input ={
                        <input type="text"
                                onChange={this.otherLhandleChange}
                                placeholder={this.state.onother}
                                {...this.state.dis}
                               
                                className={this.state.otheLClass}/> }
                
                />
            </div>
            <div> <Select name="llavel "
                    question="Did you have an international acknowledge language certificate  "/></div>
            
            <div> <Select name="llavel "
                    question="Have you done the internship in the  area of your future study? "/></div>
              <div> <Select name="llavel "
                    question="Do you volunteer in the area of your future study?  "/></div>
             <div> <Select name="llavel "
                    question="Did you have  working  experience?   "/></div>
            <div> <Select name="llavel "
                    question="Are you working now? "/></div>


        </div>
    )
}}
export default  Eligibility 
