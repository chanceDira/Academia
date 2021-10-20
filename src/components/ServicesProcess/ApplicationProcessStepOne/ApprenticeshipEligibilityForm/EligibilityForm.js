import React, {useState, useContext} from 'react'
import Select from './EligibilityItem/EligibilityItem'
import SelectOne from './EligibilityItem/EligibilityItemOne'
import SelectGerm from './EligibilityItem/EligibilityGerm'
import SelectTwo from './EligibilityItem/EligibilityItemTwo'
import {AuthContext}from'../../../../shared/context/auth-context'
import axios from '../../../../axios'
import './EligibilityForm.css'
const Eligibility = () =>{
    const auth = useContext(AuthContext)
    const [fullname, setFullname] = useState(auth.fullName);
    const [cname, setCname] = useState("");
    const [other, setOther] = useState(true);
    const [yesGerman, setYesGerman] = useState(false);
    const [otherL, setOtherL] = useState(true);
    const [otherClass, setOtherClass] = useState("other-input-disabled");
    const [otherLClass, setOtherLClass] = useState("other-input-disabled");
    const [another, setOnother] = useState("");
    const [dis, setDis] = useState("disabled");
    const [certificate, setCertificate] = useState("no");
    const [certificatelang, setcertificatelang] = useState("no");
    const [university, setUniversity] = useState("no");
    const [bachelor, setBachelor] = useState("no");
    const [master, setMaster] = useState("no");
    const [france, setFrance] = useState("");
    const [english, setEnglish] = useState("");
    const [otherLanguage, setOtherLanguage] = useState("no");
    const [germanLang, setGermanLang] = useState("no");
    const [germanLangLevel, setGermanLangLevel] = useState("no");
    const [volunteer, setVolunteer] = useState("no");
    const [experience, setExperience] = useState("no");
    const [workingnow , setWorkingNow] = useState("no");

    const handleFormSubmit= ( event ) => {
       
         console.log('izere----',auth.fullName);
        event.preventDefault();
        let formData = new FormData();    //formdata object
        let url='http://localhost:5000/eligibilty'
        formData.append('DiplomaOrCert', certificate)
        formData.append('university', university)
        formData.append('bachelorDegree', bachelor)
        formData.append('masterDegree', master)
        formData.append('foreignlang',[english, france, otherLanguage])
        formData.append('germanLangCert', germanLang)
        formData.append('GermLangLevel', germanLangLevel)
        formData.append('certificatelang', certificatelang)
        formData.append('creator', auth.userId)
        formData.append('fullName', auth.fullName)
        // formData.append('phone', auth.phone)
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
const noCertificate = e => {
    
    const { name, value } = e.target;
    console.log(value)
    
        setCertificate (value)
        setCname(value)
        setDis("disabled")
        setOtherClass("other-input-disabled")
        
        

   
    };
const yesCertificate = e => {

    const { name, value } = e.target;
    console.log(value)
  
        setCertificate(value)
        setCname(value)
        setDis("disabled")
        setOtherClass("other-input-disabled")
    
    };
const otherCertificate = e => {
    
    const { name, value } = e.target;
        setCertificate(value)
        setCname(name)
        setOther(true)
        setOtherClass()
        setOtherClass("other-input")
    };



    const engLanguage = e => {
    
        const { name, value } = e.target;
        console.log(value)
        
            setEnglish (value)
            setCname(value)
            setDis("disabled")
       
        };
    const frLanguage = e => {
    
        const { name, value } = e.target;
        console.log(value)
      
            setFrance(value)
            setCname(value)
            setDis("disabled")
           
        
    }
const otherLanguageHandle = e =>{
    const { name, value } = e.target;
    setOtherLanguage(value)
    setOtherLClass("other-input")
}

const noUniversity = e => {
    const { name, value } = e.target;
        setUniversity(value)

   
    };
const yesUniversity = e => {
    const { name, value } = e.target;
    
    setUniversity(value)

    };

const noBachelor = e => {
    const { name, value } = e.target;
    setBachelor(value)
    };
const yesBachelor = e => {
    const { name, value } = e.target;
    setBachelor(value)
 
    };

const noMaster = e => {
    const { name, value } = e.target;
        setMaster(value)      

    };
const yesMaster = e => {
    const { name, value } = e.target;
    setMaster(value)   
    };

const yesGermanLang = e => {
    const { name, value } = e.target;
    setYesGerman(true)
    setGermanLang(value)      
    };
const noGermanLang = e => {
    const { name, value } = e.target;
    setYesGerman(false)
    setGermanLang(value)  
    };

    const yesGermanLangLevel = e => {
        const { name, value } = e.target;
        setGermanLangLevel(value)      
        };
    const noGermanLangLevel = e => {
        const { name, value } = e.target;
        setGermanLangLevel(value)  
        };
const noVolunteer = e => {
        const { name, value } = e.target;
        
    setVolunteer(value)      
    
    };
const yesVolunteer = e => {
        const { name, value } = e.target;
    setVolunteer(value) 
        };
const noExperience = e => {
    const { name, value } = e.target;
    setExperience(value)      
  
    };
const yesExperience = e => {
    const { name, value } = e.target;
    setExperience(value)  
    };
const noWorkingNow = e => {
    const { name, value } = e.target;
    setWorkingNow(value)      

    };
const yesWorkingNow = e => {
    const { name, value } = e.target;
    setWorkingNow(value) 
    };

    return(
        <div>
            <form method="post" enctype="multipart/form-data">
             <div>
             <h1>Welcome {fullname}	</h1>
             <h1>Elegibility  Check </h1>
                 <Select 
                    name={ cname}
                    question="Do you have a high school diploma or certificate? "
                    other={ other}
                    noChange={ noCertificate}
                    yesChange={ yesCertificate}
                    otherChange={ otherCertificate}
                    input ={
                    <input type="text"
                            // onChange={ otherhandleChange}
                            placeholder={another}
                            {...dis}
                           
                            className={otherClass}
                        /> }
                    />
             </div>

            
             <div>  <Select 
                    name="university "
                    noChange={ noUniversity}
                    yesChange={ yesUniversity}
                    question="Did you do university studies? "
                     
                    /></div>
             <div> <Select name="oneyear "
                    question="Did you completed successfully one year of  university?  "/></div>
             <div> <Select name="bachelor "
                    question="Did you have a Bachelor Degree?  "
                    noChange={ noBachelor}
                    yesChange={ yesBachelor}/></div>
                    
             <div> <Select name="masters "
                    question="Did you have a Master degree?  "
                    noChange={ noMaster}
                    yesChange={ yesMaster}/></div>
             <div> <SelectGerm  name="German "
                    question="Do you have a German language certificate? ? "
                    noChange={ noGermanLang}
                    yesChange={yesGermanLang}
                    yesGrmn={yesGerman}
                    input ={
                        <div style={{display:'flex' }}>
                        <b style={{color:'green' }}>
                          <br />
                         <SelectTwo  
                         question="Which language level do you reached? " />
                         </b>
                       </div>}
                        />
                    
                </div>
        
            <div>
                <SelectOne
                    frChange={frLanguage}
                    engChange={engLanguage}
                    otherChange={ otherLanguageHandle}
                    question="Did you have knowledge of foreign languages?" 
                    otherL={ otherL}
                    input ={
                        <input type="text"
                                // onChange={ otherLhandleChange}
                                placeholder={ another}
                                {... dis}
                               
                                className={otherLClass}/> }
                
                />
            </div>
            <div> <Select name="llavel "
                    noChange={ noVolunteer}
                    yesChange={ yesVolunteer}
                    question="Do you volunteer in the area of your future study?  "/></div>
            <div> <Select name="llavel "
                    noChange={ noExperience}
                    yesChange={ yesExperience}
                    question="Did you have  working  experience?   "/></div>
            <div> <Select name="llavel "
                    noChange={ noWorkingNow}
                    yesChange={ yesWorkingNow}
                    question="Are you working now? "/></div>
        <button type="submit" class="btn btn-primary" onClick={e =>  handleFormSubmit(e)}>SAVE</button>
</form>
           

        </div>
    )
}
export default  Eligibility 
