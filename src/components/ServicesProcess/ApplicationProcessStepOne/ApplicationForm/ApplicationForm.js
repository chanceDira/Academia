import React, {useState, useContext} from 'react'
import Select from './ApplicationItem/ApplicationItem'
import ApplicationItemUnivOne from './ApplicationItem/ApplicationItemUnivOne'
import ApplicationItemCertificate from './ApplicationItem/ApplicationItemCertificate'
import ApplicationItemUniversity from './ApplicationItem/ApplicationItemUniversity'
import ApplicationItemWork from './ApplicationItem/ApplicationItemWork'
import {AuthContext}from'../../../../shared/context/auth-context'
import axios from '../../../../axios'
import './ApplicationForm.css'

const ApplicationForm = () =>{
    const auth = useContext(AuthContext)
    const [fullname, setFullname] = useState(auth.fullName);
    const [cname, setCname] = useState("");

//---------------Application for yes choice--------------------------
    const [yesCert, setYesCert] = useState(true);
    const [yesUniv, setYesUniv] = useState(true);
    const [yesUnivOne, setYesUnivOne] = useState(true);
    const [yesWorkOne, setYesWorkOne] = useState(true);

//---------------Application for yesClass choice--------------------------   
    const [yesCertClass, setYesCertClass] = useState("other-in-input-disabled");
    const [yesUnivClass, setYesUnivClass] = useState("other-in-input-disabled");
    const [yesUnivOneClass, setYesUnivOneClass] = useState("other-in-input-disabled");
    const [yesWorkClass, setYesWorkClass] = useState("other-in-input-disabled");
    
//---------------Application for yesClass choice--------------------------       
    const [dis, setDis] = useState("disabled");
    const [certificate, setCertificate] = useState("no");
    const [university, setUniversity] = useState("no");
    const [bachelor, setBachelor] = useState("no");
    const [master, setMaster] = useState("no");


    const handleFormSubmit= ( event ) => {
        event.preventDefault();
        let formData = new FormData();
        let url='http://localhost:5000/eligibilty'
        formData.append('DiplomaOrCert', certificate)
        formData.append('university', university)
        formData.append('bachelorDegree', bachelor)
        formData.append('masterDegree', master)
        formData.append('creator', auth.userId)
        formData.append('fullName', auth.fullName)
        formData.append('email', auth.email)
        formData.append('token', auth.token)
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        var json = JSON.stringify(object);
                for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        console.log(json)
  
        axios({
            method: 'POST',
            url, 
            data: json, 
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        }) 
        .then(function (response) {
            console.log("res",response)

        })
        .catch(function (err) {
            //handle error
            console.log(err)
        });
    }


//---------------Application for yes method choice--------------------------
const yesCertificate = e => {
    const { name, value } = e.target;
    console.log(value)
        setYesCert(true)
        setCname(value)
        setDis("disabled")
        setYesCertClass("other-app-input")
    };

const yesUniversity = e => {
    const { name, value } = e.target;
        setCname(name)
        setYesUniv(true)
        setYesUnivClass("other-app-input")
    };
const yesUniversityOne = e => {
    const { name, value } = e.target;
        setCname(name)
        setYesWorkOne(true)
        setYesUnivOneClass("other-app-input")
    };
const yesWork = e => {
    const { name, value } = e.target;
        setCname(name)
        setYesWorkOne(true)
        setYesWorkClass("other-app-input")
    };
const yesBachelor = e => {
    const { name, value } = e.target;
    setBachelor(value)
    };
const yesMaster = e => {
    const { name, value } = e.target;
    setMaster(value)   
    };
    
//---------------Application for no method choice--------------------------
const noCertificate = e => {
    const { name, value } = e.target;
        setCertificate (value)
        setCname(value)
        setDis("disabled")
        setYesCertClass("other-in-input-disabled")
    };
const noUniversity = e => {
    const { name, value } = e.target;
        setUniversity(value)
        setYesUnivClass("other-in-input-disabled")
    };
const noWork = e => {
    const { name, value } = e.target;
        setUniversity(value)
        setYesWorkClass("other-in-input-disabled")
    };   
const noUniversityOne = e => {
    const { name, value } = e.target;
        setUniversity(value)
        setYesUnivOneClass("other-in-input-disabled")
    };
const noBachelor = e => {
    const { name, value } = e.target;
    setBachelor(value)
    };
const noMaster = e => {
    const { name, value } = e.target;
        setMaster(value)      
    };

    return(
        <div>
            <form method="post" enctype="multipart/form-data">
                <div style={{marginBottom:"20px"}}>
                    <h1>Hey {fullname} fill application form</h1>
                    <ApplicationItemCertificate  
                    name={cname}
                    question="Do you have a high school diploma or certificate? "
                    yesCert={ yesCert}
                    noChange={ noCertificate}
                    yesChange={ yesCertificate}
                    input ={<div>
                                <input type="text"
                                    // onChange={ otherhandleChange}
                                    placeholder="School Name"
                                    {...dis}
                                
                                    className={yesCertClass}/>
                                        <input type="text"
                                    // onChange={ otherhandleChange}
                                    placeholder="Subject"
                                    {...dis}
                                
                                    className={yesCertClass}/>
                                        <input type="text"
                                    // onChange={ otherhandleChange}
                                    placeholder= "Year"
                                    {...dis}
                                
                                    className={yesCertClass}/>

                                    <input type="text"
                                    // onChange={ otherhandleChange}
                                    placeholder= "Location"
                                    {...dis}
                                
                                    className={yesCertClass}/>
                                    <input type="text"
                                    // onChange={ otherhandleChange}
                                    placeholder= "Certificate/Diploma"
                                    {...dis}
                                
                                    className={yesCertClass}
                                />
                </div>
                    
                    }
                    />
                    </div>
                    <div style={{marginBottom:"20px"}}>
                        <ApplicationItemUniversity 
                        name={cname}
                        question="Did you do university studies?"
                        yesUniv={yesUniv}
                        noChange={noUniversity}
                        yesChange={yesUniversity}
                        input ={<div>
                                    <input type="text"
                                        // onChange={ otherhandleChange}
                                        placeholder="School Name"
                                        {...dis}
                                    
                                        className={yesUnivClass}/>
                                            <input type="text"
                                        // onChange={ otherhandleChange}
                                        placeholder="Subject"
                                        {...dis}
                                    
                                        className={yesUnivClass}/>
                                            <input type="text"
                                        // onChange={ otherhandleChange}
                                        placeholder= "Year"
                                        {...dis}
                                    
                                        className={yesUnivClass}/>

                                        <input type="text"
                                        // onChange={ otherhandleChange}
                                        placeholder= "Location"
                                        {...dis}
                                    
                                        className={yesUnivClass}/>
                                        <input type="text"
                                        // onChange={ otherhandleChange}
                                        placeholder= "Degree/Diploma"
                                        {...dis}
                                    
                                        className={yesUnivClass}/>
                                </div>
                        }
                        />
                    </div>


                    <div style={{marginBottom:"20px"}}>
                        <ApplicationItemWork
                        name={cname}
                        question="Are you working now?"
                        yesWork={yesWorkOne}
                        noChange={noWork}
                        yesChange={yesWork}
                        input ={<div>
                                    <input type="text"
                                        // onChange={ otherhandleChange}
                                        placeholder="Company Name"
                                        {...dis}
                                    
                                        className={yesWorkClass}/>
                                            <input type="text"
                                        // onChange={ otherhandleChange}
                                        placeholder="Position"
                                        {...dis}
                                    
                                        className={yesWorkClass}/>
                                            <input type="text"
                                        // onChange={ otherhandleChange}
                                        placeholder= "From"
                                        {...dis}
                                    
                                        className={yesWorkClass}/>
                                            <input type="text"
                                        // onChange={ otherhandleChange}
                                        placeholder= "To"
                                        {...dis}
                                    
                                        className={yesWorkClass}/>

                                        <input type="text"
                                        // onChange={ otherhandleChange}
                                        placeholder= "Location"
                                        {...dis}
                                    
                                        className={yesWorkClass}/>
                                </div>
                        }
                        />
                    </div>
                    <div> 
                        <Select 
                            name="bachelor "
                            question="Did you have a Bachelor Degree?  "
                            noChange={ noBachelor}
                            yesChange={ yesBachelor}/>
                    </div>
                                
                    <div> 
                        <Select 
                            name="masters "
                            question="Did you have a Master degree?  "
                            noChange={ noMaster}
                            yesChange={ yesMaster}/>
                    </div>
                    <div> 
                        <ApplicationItemUnivOne 
                            name="oneyear"
                            question="Did you completed successfully one year of  university?"
                            yesUnivOne={yesUnivOne}
                            noChange={noUniversityOne}
                            yesChange={yesUniversityOne}
                            input ={
                                <>
                                    <input type="text"
                                    // onChange={ otherhandleChange}
                                    placeholder="Name of Certificate/Diploma"
                                    {...dis}
                                    className={yesUnivOneClass}/>
                                </>}
                        />
                    </div>
                    
                    <button type="submit" class="btn btn-primary" onClick={e =>  handleFormSubmit(e)}>SAVE</button>
            </form>
           
        </div>
    )
}
export default  ApplicationForm 