import React, {useState, useContext} from 'react'
import Select from './ApplicationItem/ApplicationItem'
import ApplicationItemUnivOne from './ApplicationItem/ApplicationItemUnivOne'
import ApplicationItemCertificate from './ApplicationItem/ApplicationItemCertificate'
import ApplicationItemUniversity from './ApplicationItem/ApplicationItemUniversity'
import ApplicationItemWork from './ApplicationItem/ApplicationItemWork'
import ApplicationItemIntern from './ApplicationItem/ApplicationItemIntern'
import ApplicationItemVol from './ApplicationItem/ApplicationItemVol'
import {AuthContext}from'../../../../shared/context/auth-context'
import axios from '../../../../axios'
import './ApplicationForm.css'

const ApplicationForm = () =>{
    const auth = useContext(AuthContext)
    const [fullname, setFullname] = useState(auth.fullName); 
    const [cname, setCname] = useState("");
    
//----state for field after confirm that you have a high school diploma or certificate-----------------------------------
    const [schoolName, setSchoolName] = useState("");
    const [subject, setSubject] = useState("");
    const [year, setYear] = useState("");
    const [location, setLocation] = useState("");
    const [certDiploma, setCertDiploma] = useState("");

//----state for field of add choice
    const [addschoolName, setAddSchoolName] = useState("");
    const [addsubject, setAddSubject] = useState("");
    const [addyear, setAddYear] = useState("");
    const [addlocation, setAddLocation] = useState("");
    const [addcertDiploma, setAddCertDiploma] = useState("");
/**--------------------------- */

//----state for field after confirm that you have a high school diploma or certificate-----------------------------------
    const [univschoolName, setUnivSchoolName] = useState("");
    const [univsubject, setUnivSubject] = useState("");
    const [univyear, setUnivYear] = useState("");
    const [univlocation, setUnivLocation] = useState("");
    const [univcertDiploma, setUnivCertDiploma] = useState("");

//----state for field of add choice
    const [addunivschoolName, setAddUnivSchoolName] = useState("");
    const [addunivsubject, setAddUnivSubject] = useState("");
    const [addunivyear, setAddUnivYear] = useState("");
    const [addunivlocation, setAddUnivLocation] = useState("");
    const [addunivcertDiploma, setAddUnivCertDiploma] = useState("");
/**----------------------------------------------------------------- */

//----state for field after confirm that you have a work-----------------------------------
    const [workcompanyName, setWorkCompanyName] = useState("");
    const [workposition, setWorkPosition] = useState("");
    const [workfromyear, setWorkFromYear] = useState("");
    const [worktoyear, setWorkToYear] = useState("");
    const [worklocation, setWorkLocation] = useState("");

//----state for field of add choice
    const [addworkcompanyName, setAddWorkCompanyName] = useState("");
    const [addworkposition, setAddWorkPosition] = useState("");
    const [addworkfromyear, setAddWorkFromYear] = useState("");
    const [addworktoyear, setAddWorkToYear] = useState("");
    const [addworklocation, setAddWorkLocation] = useState("");

/**--------------------------- */

//----state for field after confirm that you have a work-----------------------------------
    const [interncompanyName, setInternCompanyName] = useState("");
    const [internposition, setInternPosition] = useState("");
    const [internfromyear, setInternFromYear] = useState("");
    const [interntoyear, setInternToYear] = useState("");
    const [internlocation, setInternLocation] = useState("");

    //----state for field of add choice
    const [addinterncompanyName, setAddInternCompanyName] = useState("");
    const [addinternposition, setAddInternPosition] = useState("");
    const [addinternfromyear, setAddInternFromYear] = useState("");
    const [addinterntoyear, setAddInternToYear] = useState("");
    const [addinternlocation, setAddInternLocation] = useState("");

    /**--------------------------- */

    //----state for field after confirm that you have a work-----------------------------------
    const [volunteercompanyName, setVolunteerCompanyName] = useState("");
    const [volunteerposition, setVolunteerPosition] = useState("");
    const [volunteerfromyear, setVolunteerFromYear] = useState("");
    const [volunteertoyear, setVolunteerToYear] = useState("");
    const [volunteerlocation, setVolunteerLocation] = useState("");

    //----state for field of add choice
    const [addvolunteercompanyName, setAddVolunteerCompanyName] = useState("");
    const [addvolunteerposition, setAddVolunteerPosition] = useState("");
    const [addvolunteerfromyear, setAddVolunteerFromYear] = useState("");
    const [addvolunteertoyear, setAddVolunteerToYear] = useState("");
    const [addvolunteerlocation, setAddVolunteerLocation] = useState("");

/**--------------------------- */

//---------------Application for Add choice--------------------------
    const [addWor, setAddwor] =useState (false)
    const [addintern, setAddIntern] =useState (false)
    const [adduniv, setAddUniv] =useState (false)
    const [addcert, setAddCert] =useState (false)
    const [addvol, setAddVol] = useState(false)

//---------------Application for yes choice--------------------------
    const [yesCert, setYesCert] = useState(true);
    const [yesUniv, setYesUniv] = useState(true);
    const [yesvol, setYesVol] = useState(true);

    const [yesUnivOne, setYesUnivOne] = useState(true);
    const [yesVolOne, setYesVolOne] = useState(true);
    const [yesWorkOne, setYesWorkOne] = useState(true);
    const [yesInternOne, setYesInternOne] = useState(true);

//---------------Application for yesClass choice--------------------------   
    const [yesCertClass, setYesCertClass] = useState("other-in-input-disabled");
    const [yesUnivClass, setYesUnivClass] = useState("other-in-input-disabled");
    const [yesVolClass, setYesVolClass] = useState("other-in-input-disabled");
    const [yesUnivOneClass, setYesUnivOneClass] = useState("other-in-input-disabled");
    const [yesWorkClass, setYesWorkClass] = useState("other-in-input-disabled");
    const [yesInternClass, setYesInternClass] = useState("other-in-input-disabled");
    const [addWorkClass, setAddWorkClass] = useState("other-in-input-disabled");
    const [addInternClass, setAddInternClass] = useState("other-in-input-disabled");
    const [addVolClass, setAddVolClass] = useState("other-in-input-disabled");
    
//---------------Application for yesClass choice--------------------------       
    const [dis, setDis] = useState("disabled");
    const [certificate, setCertificate] = useState("no");
    const [university, setUniversity] = useState("no");
    const [volunteer, setVolunteer] = useState("no");
    const [internship, setInternship] = useState("no");
    const [bachelor, setBachelor] = useState("no");
    const [master, setMaster] = useState("no");


    const handleFormSubmit= ( event ) => {
        console.log('izere',addinterncompanyName)
        event.preventDefault();
        let formData = new FormData();
        let url='http://localhost:5000/application'
        formData.append('DiplomaOrCert', certificate)
        formData.append('volunteer', volunteer)

//----formatdata for field after confirm that you have a high school diploma or certificate-----------------------------------
        formData.append('sec_schoolName', schoolName)
        formData.append('sec_subject', subject)
        formData.append('sec_year', year)
        formData.append('sec_location', location)
        formData.append('sec_diploma', certDiploma)

//----formatdata for field of add choice-----------------------------------
        formData.append('other_sec_schoolName', addschoolName)
        formData.append('other_sec_subject', addsubject)
        formData.append('other_sec_year', addyear)
        formData.append('other_sec_location', addlocation)
        formData.append('other_sec_diploma', addcertDiploma)

//----formatdata for field after confirm that you have a university school diploma or certificate-----------------------------------
        formData.append('un_schoolName', univschoolName)
        formData.append('un_faculty', univsubject)
        formData.append('un_year', univyear)
        formData.append('un_location', univlocation)
        formData.append('un_degree', univcertDiploma)

//----formatdata for field of add choice-----------------------------------
        formData.append('other_un_schoolName', addunivschoolName)
        formData.append('other_un_faculty', addunivsubject)
        formData.append('other_un_year', addunivyear)
        formData.append('other_un_location', addunivlocation)
        formData.append('other_un_degree', addunivcertDiploma)
/**---------------------------------------------------------------------- */

//----formatdata for field after confirm that you have a university school diploma or certificate-----------------------------------
        formData.append('workingcompanyName', workcompanyName)
        formData.append('workingposition', workposition)
        formData.append('workfromyear', workfromyear)
        formData.append('workingduration', worktoyear)
        formData.append('workinglocation', worklocation)

//----formatdata for field of add choice-----------------------------------
        formData.append('other_workingcompanyName', addworkcompanyName)
        formData.append('other_workingposition', addworkposition)
        formData.append('other_workingduration', addworkfromyear)
        formData.append('addworktoyear', addworktoyear)
        formData.append('other_workinglocation', addworklocation)
/**---------------------------------------------------------------------- */

/**---------------------------------------------------------------------- */

//----formatdata for field after confirm that you internship of your future career-----------------------------------
        formData.append('inter_companyName', interncompanyName)
        formData.append('inter_position', internposition)
        formData.append('inter_fromyear', internfromyear)
        formData.append('inter_toyear', interntoyear)
        formData.append('inter_location', internlocation)

        //----formatdata for field of add choice-----------------------------------
        formData.append('other_inter_companyName', addinterncompanyName)
        formData.append('other_inter_position', addinternposition)
        formData.append('other_inter_duration', addinternfromyear)
        formData.append('addinterntoyear', addinterntoyear)
        formData.append('other_inter_location', addinternlocation)
        /**---------------------------------------------------------------------- */
        //----formatdata for field after confirm that you volunteer of your future career-----------------------------------
        formData.append('volunteercompanyName', volunteercompanyName)
        formData.append('volunteerposition', volunteerposition)
        formData.append('volunteerfromyear', volunteerfromyear)
        formData.append('volunteertoyear', volunteertoyear)
        formData.append('volunteerlocation', volunteerlocation)

        //----formatdata for field of add choice-----------------------------------
        formData.append('other_volunt_companyName', addvolunteercompanyName)
        formData.append('other_volunt_position', addvolunteerposition)
        formData.append('other_volunt_duration', addvolunteerfromyear)
        formData.append('addvolunt_toyear', addvolunteertoyear)
        formData.append('other_volunt_location', addvolunteerlocation)
        /**---------------------------------------------------------------------- */



        formData.append('internship', internship)
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
            headers:{'Content-Type': 'application/json; charset=utf-8', accessToken:auth.token}
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
const yesIntern = e => {
    const { name, value } = e.target;
        setCname(name)
        setYesInternOne(true)
        setAddInternClass("other-app-input")
        setYesInternClass("other-app-input")
    };
const yesVol = e => {
    const { name, value } = e.target;
        setCname(name)
        setYesVolOne(true)
        setYesVolClass("other-app-input")
    };
const addWork = e => {
    const addwork = addWor
    console.log(addwork)
    setAddwor(!addwork)
    setAddWorkClass("other-app-input")
    };
const addUniv = e => {
    const add = adduniv
    console.log(add)
    setAddUniv(!add)
    setAddWorkClass("other-app-input")
};
const addCert = e => {
    const add = addcert
    console.log(add)
    setAddCert(!add)
    setAddWorkClass("other-app-input")
};
const addIntern = e => {
    const add = addintern
    console.log(add)
    setAddIntern(!add)
    setAddInternClass("other-app-input")
};
const addVol = e => {
    const add = addvol
    console.log(add)
    setAddVol(!add)
    setAddVolClass("other-app-input")
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
        setAddWorkClass("other-in-input-disabled")
    };   
const noIntern = e => {
    const { name, value } = e.target;
        setUniversity(value)
        setYesInternOne(true)
        setAddInternClass("other-in-input-disabled")
        setYesInternClass("other-in-input-disabled")
    }; 

const noVol = e => {
    const { name, value } = e.target;
        setVolunteer(value)
        setYesVolOne(true)
        setAddVolClass("other-in-input-disabled")
        setYesVolClass("other-in-input-disabled")
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
                                    placeholder="School Name"
                                    {...dis}
                                    value={schoolName} 
                                    onChange={e => setSchoolName(e.target.value)}
                                    className={yesCertClass}/>
      
                                    <input type="text"
                                    placeholder="Subject"
                                    {...dis}
                                    className={yesCertClass}
                                    value={subject} 
                                    onChange={e => setSubject(e.target.value)}/>
                                    
                                    <input type="text"
                                    placeholder= "Year"
                                    {...dis}
                                    value={year} 
                                    onChange={e => setYear(e.target.value)}
                                    className={yesCertClass}/>

                                    <input type="text"
                                    placeholder= "Location"
                                    {...dis}
                                    value={location} 
                                    onChange={e => setLocation(e.target.value)}
                                    className={yesCertClass}/>
                                    <input type="text"
                                    value={certDiploma} 
                                    onChange={e => setCertDiploma(e.target.value)}
                                    placeholder= "Certificate/Diploma"
                                    {...dis}
                                
                                    className={yesCertClass}
                                />
                               <div><b className={yesCertClass}>In case you have other high school click</b> <span onClick={addCert} className={[yesCertClass, "add-work-btn"].join(" ")}>ADD</span></div>
                                        {addcert?
                                        <>
                                    <input type="text"
                                        placeholder="School Name"
                                        value={addschoolName} 
                                        onChange={e => setAddSchoolName(e.target.value)}
                                        {...dis}
                                        className={addWorkClass}/>
                                    <input type="text"
                                        placeholder="Subject"
                                        value={addsubject} 
                                        onChange={e => setAddSubject(e.target.value)}
                                        {...dis}
                                        className={addWorkClass}/>
                                    <input type="text"
                                        value={addyear} 
                                        onChange={e => setAddYear(e.target.value)}
                                        placeholder= "Year"
                                        {...dis}
                                        className={addWorkClass}/> 

                                    <input type="text"
                                        value={addlocation} 
                                        onChange={e => setAddLocation(e.target.value)}
                                        placeholder= "Location"
                                        {...dis}
                                
                                    className={addWorkClass}/>
                                    <input type="text"
                                        value={addcertDiploma} 
                                        onChange={e => setAddCertDiploma(e.target.value)}
                                        placeholder= "Certificate/Diploma"
                                        {...dis}
                                        className={addWorkClass}/>
                                            
                                        </>:null}
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
                                        placeholder="School Name"
                                        {...dis}
                                        value={univschoolName} 
                                        onChange={e => setUnivSchoolName(e.target.value)}
                                        className={yesUnivClass}/>
                                    <input type="text"
                                        value={univsubject} 
                                        onChange={e => setUnivSubject(e.target.value)}
                                        placeholder="Subject"
                                        {...dis}                                
                                        className={yesUnivClass}/>
                                    <input type="text"
                                        value={univyear} 
                                        onChange={e => setUnivYear(e.target.value)}
                                        placeholder= "Year"
                                        {...dis}                 
                                        className={yesUnivClass}/>

                                    <input type="text"
                                        value={univlocation} 
                                        onChange={e => setUnivLocation(e.target.value)}
                                        placeholder= "Location"
                                        {...dis}
                                        className={yesUnivClass}/>
                                    <input type="text"
                                        value={univcertDiploma} 
                                        onChange={e => setUnivCertDiploma(e.target.value)}
                                        placeholder= "Degree/Diploma"
                                        {...dis}
                                        className={yesUnivClass}/>
                                        <div><b className={yesUnivClass}>In case you have other university click</b> <span onClick={addUniv} className={[yesUnivClass, "add-work-btn"].join(" ")}>ADD</span></div>
                                        {adduniv?
                                        <>
                                        
                                  
                                        <input type="text"
                                            value={addunivschoolName} 
                                            onChange={e => setAddUnivSchoolName(e.target.value)}
                                            placeholder="School Name"
                                            {...dis}
                                            className={addWorkClass}/>
                                        <input type="text"
                                            value={addunivsubject} 
                                            onChange={e => setAddUnivSubject(e.target.value)}
                                            placeholder="Subject"
                                            {...dis}                        
                                            className={addWorkClass}/>
                                        <input type="text"
                                            value={addunivyear} 
                                            onChange={e => setAddUnivYear(e.target.value)}
                                            placeholder= "Year"
                                            {...dis}               
                                            className={addWorkClass}/>
                                        <input type="text"
                                            value={addunivlocation} 
                                            onChange={e => setAddUnivLocation(e.target.value)}
                                            placeholder= "Location"
                                            {...dis}       
                                            className={addWorkClass}/>
                                        <input type="text"
                                            value={addunivcertDiploma} 
                                            onChange={e => setAddUnivCertDiploma(e.target.value)}
                                            placeholder= "Certificate/Diploma"
                                            {...dis}
                                            className={addWorkClass}/>
                                        </>:null}
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
                                        value={workcompanyName} 
                                        onChange={e => setWorkCompanyName(e.target.value)}
                                        placeholder="Company Name"
                                        {...dis}
                                        className={yesWorkClass}/>
                                    <input type="text"
                                        value = {workposition}
                                        onChange ={e => setWorkPosition(e.target.value)}
                                        placeholder="Position"
                                        {...dis}
                                    
                                        className={yesWorkClass}/>
                                    <input type="text"
                                        value = {workfromyear}
                                        onChange ={e => setWorkFromYear(e.target.value)}
                                        placeholder= "From/To (2017-2021)"
                                        {...dis}
                                    
                                        className={yesWorkClass}/>

                                    <input type="text"
                                        value = {worklocation}
                                        onChange ={e => setWorkLocation(e.target.value)}
                                        placeholder= "Location"
                                        {...dis}
                                    
                                        className={yesWorkClass}/>
                                          <div><b className={yesWorkClass}>In case you have other work</b> <span onClick={addWork} className={[yesWorkClass, "add-work-btn"].join(" ")}>ADD</span></div>
                                        {addWor?
                                        <>
                                         <input type="text"
                                        value={addworkcompanyName} 
                                        onChange={e => setAddWorkCompanyName(e.target.value)}
                                        placeholder="Company Name"
                                        {...dis}
                                        className={addWorkClass}/>
                                    <input type="text"
                                        value = {addworkposition}
                                        onChange ={e => setAddWorkPosition(e.target.value)}
                                        placeholder="Position"
                                        {...dis}
                                    
                                        className={addWorkClass}/>
                                    <input type="text"
                                        value = {addworkfromyear}
                                        onChange ={e => setAddWorkFromYear(e.target.value)}
                                        placeholder= "From/To (2017-2021)"
                                        {...dis}
                                        className={addWorkClass}/>
                                    
                                    <input type="text"
                                        value = {addworklocation}
                                        onChange ={e => setAddWorkLocation(e.target.value)}
                                        placeholder= "Location"
                                        {...dis}
                                    
                                        className={addWorkClass}/>
                                          
                                        <input type="text"
                                        placeholder= "Location"
                                        {...dis}
                                    
                                        className={addWorkClass}/>
                                            
                                        </>:null}
                                      
                                </div>
                        }
                        />
                    </div>
                    <div style={{marginBottom:"20px"}}>
                        <ApplicationItemIntern
                        name={cname}
                        question="Have you done the internship in the area of your future study?"
                        yesIntern={yesInternOne}
                        noChange={noIntern}
                        yesChange={yesIntern}
                        input ={<div>
                                    <input type="text"
                                        value={interncompanyName} 
                                        onChange={e => setInternCompanyName(e.target.value)}
                                        placeholder="Company Name"
                                        {...dis}
                                        className={yesInternClass}/>
                                    <input type="text"
                                        value = {internposition}
                                        onChange ={e => setInternPosition(e.target.value)}
                                        placeholder="Position"
                                        {...dis}
                                    
                                        className={yesInternClass}/>
                                    <input type="text"
                                        value = {internfromyear}
                                        onChange ={e => setInternFromYear(e.target.value)}
                                        placeholder= "From/To (2017-2021)"
                                        {...dis}
                                    
                                        className={yesInternClass}/>

                                    <input type="text"
                                        value = {internlocation}
                                        onChange ={e => setInternLocation(e.target.value)}
                                        placeholder= "Location"
                                        {...dis}
                                    
                                        className={yesInternClass}/>

                                        <div><b className={yesInternClass}>In case you have other internship</b> <span onClick={addIntern} className={[addInternClass, "add-work-btn"].join(" ")}>ADD</span></div>

                                        {addintern?
                                        <>
                                        
                                  
                                        <input type="text"
                                        value={addinterncompanyName} 
                                        onChange={e => setAddInternCompanyName(e.target.value)}
                                        placeholder="Company Name"
                                        {...dis}
                                        className={addInternClass}/>
                                    <input type="text"
                                        value = {addinternposition}
                                        onChange ={e => setAddInternPosition(e.target.value)}
                                        placeholder="Position"
                                        {...dis}
                                    
                                        className={addInternClass}/>
                                    <input type="text"
                                        value = {addinternfromyear}
                                        onChange ={e => setAddInternFromYear(e.target.value)}
                                        placeholder= "From/To (2017-2021)"
                                        {...dis}
                                        className={addInternClass}/>

                                    <input type="text"
                                        value = {addinternlocation}
                                        onChange ={e => setAddInternLocation(e.target.value)}
                                        placeholder= "Location"
                                        {...dis}
                                    
                                        className={addInternClass}/>
                                          
                                        
                                            
                                        </>:null}
                                      
                                </div>
                        }
                        />
                        </div>
                <div style={{marginBottom:"20px"}}>
                    <ApplicationItemVol
                        name={cname}
                        question="Do you volunteer in the area of your future study?"
                        yesvol={yesvol}
                        noChange={noVol}
                        yesChange={yesVol}
                        input = {<div>
                                    <input type="text"
                                        value={volunteercompanyName} 
                                        onChange={e => setVolunteerCompanyName(e.target.value)}
                                        placeholder="Company Name"
                                        {...dis}
                                        className={yesVolClass}/>
                                    <input type="text"
                                        value = {volunteerposition}
                                        onChange ={e => setVolunteerPosition(e.target.value)}
                                        placeholder="Position"
                                        {...dis}
                                    
                                        className={yesVolClass}/>
                                    <input type="text"
                                        value = {volunteerfromyear}
                                        onChange ={e => setVolunteerFromYear(e.target.value)}
                                        placeholder= "From/To (2017-2021)"
                                        {...dis}
                                    
                                        className={yesVolClass}/>

                                    <input type="text"
                                        value = {volunteerlocation}
                                        onChange ={e => setVolunteerLocation(e.target.value)}
                                        placeholder= "Location"
                                        {...dis}
                                    
                                        className={yesVolClass}/>
                                        
                                          
                                        <div onClick={addVol} className={[yesVolClass, "add-work-btn"].join(" ")}>ADD VOLUNTEER</div>
                                        {addvol?
                                        <>
                                        
                                  
                                        <input type="text"
                                        value={addvolunteercompanyName} 
                                        onChange={e => setAddVolunteerCompanyName(e.target.value)}
                                        placeholder="Company Name"
                                        {...dis}
                                        className={addVolClass}/>
                                    <input type="text"
                                        value = {addvolunteerposition}
                                        onChange ={e => setAddVolunteerPosition(e.target.value)}
                                        placeholder="Position"
                                        {...dis}
                                    
                                        className={addVolClass}/>
                                    <input type="text"
                                        value = {addvolunteerfromyear}
                                        onChange ={e => setAddVolunteerFromYear(e.target.value)}
                                        placeholder= "From/To (2017-2021)"
                                        {...dis}
                                        className={addVolClass}/>
                                

                                    <input type="text"
                                        value = {addvolunteerlocation}
                                        onChange ={e => setAddVolunteerLocation(e.target.value)}
                                        placeholder= "Location"
                                        {...dis}
                                        className={addVolClass}/>                                           
                                        </>:null}
                                      
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