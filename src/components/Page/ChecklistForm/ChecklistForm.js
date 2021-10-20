import React, {useState, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'; 
import axios from '../../../axios'

import {AuthContext}from'../../../shared/context/auth-context'

// import Country from './Country/Country';
import './ChecklistForm.css';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '70%',
    
    },
  },
}));



const CheckList = () => {
  const classes = useStyles();
  const auth = useContext(AuthContext)
  // =================Eligibility===================
  const [category, setCategory] = useState("Individual");
  const [fullname, setFullname] = useState(auth.fullName);
  const [email, setEmail] = useState(auth.email);
  const [phone, setPhone] = useState(auth.phone);
  const [birthday, setBirthday] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [nationality, setNationality] = useState("select");
  const [family, setFamily] = useState("");
  const [citycode, setCitycode] = useState("");
  const [gender, setGender] = useState("");
  const [street, setStreet] = useState("");
  const [pobox, setPobox] = useState("");

// =================Eligibility end===================

// =================Profile===================

// =================Profile end===================

//===================== Application===============================
  const [certDiploma, setCertDiploma] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
 

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

//===================== Application end===============================
  const [cname, setCname] = useState("");
  const [other, setOther] = useState(true);
  const [yesGerman, setYesGerman] = useState(false);
  const [otherL, setOtherL] = useState(true);
  const [otherClass, setOtherClass] = useState("other-input-disabled");
  const [otherLClass, setOtherLClass] = useState("other-input-disabled");
  const [another, setOnother] = useState("");
  const [certificateLang, setCertificateLang] = useState("no");
  const [otherCertificateName, setOtherCertificateName] = useState("no");
  const [universityOneYear, setUniversityOneYear] = useState("no")
  const [france, setFrance] = useState("");
  const [english, setEnglish] = useState("");
  const [otherForeignLang, setOtherFoleignLang] = useState("no");
  const [germanLang, setGermanLang] = useState("no");
  const [germanLangLevel, setGermanLangLevel] = useState("no");
  const [didInternship, setDidInternship] = useState("no");
  const [experience, setExperience] = useState("no");
  const [workingnow , setWorkingNow] = useState("no");
  //====================================================



  // const [citycode, setCitycode] = useState(" ");
  const changeNationality = (event) =>{
   setNationality( event.target.value);
  }
  const changeCategory = (event) =>{
  setCategory( event.target.value);
  }
  console.log(auth.phone)
  let formData = new FormData();    //formdata object
  let url='http://localhost:5000/checklist'
  formData.append('fullName', fullname)
  formData.append('email', email)
  formData.append('phone', phone)
  formData.append('creator',auth.userId)
  var object = {};
  formData.forEach(function(value, key){
      object[key] = value;
  });
 
  var json = JSON.stringify(object);
          for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
 //  console.log(json)
 
  axios({
   method: 'GET',
   url, 
   data: json, 
   headers:{'Content-Type': 'application/json; charset=utf-8', accessToken:auth.token}
})  
  .then(function (response) {
    console.log("iz",response.data)
    console.log("iz Eligibilties",response.data.Applications[1])
    // console.log("iz Applications",response.data.Applications)
    // console.log("iz Profiles",response.data.Profiles[0])

//Profile=======================================
    setPhone(response.data.Profiles[0].phone)
    setGender(response.data.Profiles[0].gender)
    setBirthday(response.data.Profiles[0].birthday)
    setDistrict(response.data.Profiles[0].district)
    setProvince(response.data.Profiles[0].city_province)
    setNationality(response.data.Profiles[0].country)
    setFamily(response.data.Profiles[0].family_status)
    setCitycode(response.data.Profiles[0].city_code)
    setStreet(response.data.Profiles[0].street)
    setPobox(response.data.Profiles[0].other_Po_Box)

//Eligibilities=======================================
    setCertDiploma(response.data.Eligibilties[0].DiplomaOrCert)
    setUnivCertDiploma(response.data.Eligibilties[0].bachelorDegree)
    setUniversityOneYear(response.data.Eligibilties[0].universityOneYear)

//Application=========================
  // high school=====================
    setSchoolName(response.data.Applications[0].sec_schoolName)
    setSubject(response.data.Applications[0].sec_subject)
    setYear(response.data.Applications[0].sec_year)
    console.log(year)
    setLocation(response.data.Applications[0].sec_location)
  // university =====================
    setUnivSchoolName(response.data.Applications[0].un_schoolName)
    setUnivSubject(response.data.Applications[0].un_faculty)
    setUnivYear(response.data.Applications[0].un_year)
    setUnivLocation(response.data.Applications[0].un_location)
  })
  .catch(function (err) {
      //handle error
      console.log("hehe", err)
  });


 const handleFormSubmit= ( event ) => {
     event.preventDefault();
     console.log(auth.phone)
     let formData = new FormData();    //formdata object
     let url='http://localhost:5000/checklist'
     formData.append('category', category)
     formData.append('fullName', fullname)
     formData.append('birthday', birthday)
     formData.append('district', district)
     formData.append('city_province', province)
     formData.append('nationality',nationality)
     formData.append('email', email)
     formData.append('family_status', family)
     formData.append('street',street)
     formData.append('citycode', citycode)
     formData.append('phone', phone)
     formData.append('pobox', pobox)
     formData.append('gender', gender)
     formData.append('creator',auth.userId)
     var object = {};
     formData.forEach(function(value, key){
         object[key] = value;
     });
    
     var json = JSON.stringify(object);
             for (var pair of formData.entries()) {
         console.log(pair[0]+ ', ' + pair[1]); 
     }
    //  console.log(json)
    
     axios({
      method: 'GET',
      url, 
      data: json, 
      headers:{'Content-Type': 'application/json; charset=utf-8', accessToken:auth.token}
  })  
     .then(function (response) {
       console.log("iz",response.data)
    
     })
     .catch(function (err) {
         //handle error
         console.log("iz", err)
     });
    }


  return (
    <div className="check-list-container">
     
      <div className={classes.root} className="check-list-row">

        <h1 style={{ padding:'100px 0 0 30px'}}>Thank you {fullname}</h1>
        <p style={{margin:'30px', fontSize: '18px'}}>The following is the list of all data fetched from previous stage</p>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <h2>PROFILE</h2>
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <b>PERSONAL INFORMATION</b>
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
      
          <p>Names:</p>
          <p style={{color:'green', marginLeft:'5px'}}>{fullname}</p>
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <p>E-mail:</p>
          <p style={{color:'green', marginLeft:'5px'}}>
            {email}</p>
         
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <p>Phone:</p>
          <p style={{color:'green', marginLeft:'5px'}}>{phone}</p>
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <p>Birthday</p>
          <p style={{color:'green', marginLeft:'5px'}}>{birthday}</p>
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <p>Gender</p>
          <p style={{color:'green', marginLeft:'5px'}}>{gender}</p>
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <p>Birthday</p>
          <p style={{color:'green', marginLeft:'5px'}}>{birthday}</p>
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <b>LOCATION</b>
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <p>District</p>
          <p style={{color:'green', marginLeft:'5px'}}>{district}</p>
        </div>

        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <p>Province</p>
          <p style={{color:'green', marginLeft:'5px'}}>{province}</p>
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <p>Nationality</p>
          <p style={{color:'green', marginLeft:'5px'}}>{nationality}</p>
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <p>Family</p>
          <p style={{color:'green', marginLeft:'5px'}}>{family}</p>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>City code</p>
          <p style={{color:'green', marginLeft:'50px'}}>{citycode}</p>
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <p>Street</p>
          <p style={{color:'green', marginLeft:'5px'}}>{street}</p>
        </div>
        <div style={{display:'flex', margin:'5px', fontSize: '18px'}}>
          <p>PO BOX</p>
          <p style={{color:'green', marginLeft:'5px'}}>{pobox}</p>
        </div>

        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <h2>ELIGIBILITIES</h2>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <b>QUESTION AND ANSWER</b>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Do you have a high school diploma or certificate?</p>
          <p style={{color:'green', marginLeft:'50px'}}>{certDiploma}</p>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Did you do university studies?</p>
          <p style={{color:'green', marginLeft:'50px'}}>{univcertDiploma}</p>
        </div>

        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Did you completed successfully one year of  university?</p>
          <p style={{color:'green', marginLeft:'50px'}}>{universityOneYear}</p>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Did you have a Bachelor Degree?</p>
          <p style={{color:'green', marginLeft:'50px'}}>{universityOneYear}</p>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Did you have a Master degree?</p>
          <p style={{color:'green', marginLeft:'50px'}}>{universityOneYear}</p>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Do you have a German language certificate?</p>
          <p style={{color:'green', marginLeft:'50px'}}>{universityOneYear}</p>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Which language level do you reached?</p>
          <p style={{color:'green', marginLeft:'50px'}}>{universityOneYear}</p>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Did you have knowledge of foreign languages?</p>
          <p style={{color:'green', marginLeft:'50px'}}>{universityOneYear}</p>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Did you have  working  experience?</p>
          <p style={{color:'green', marginLeft:'50px'}}>{universityOneYear}</p>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Are you working now?</p>
          <p style={{color:'green', marginLeft:'50px'}}>{universityOneYear}</p>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <h2>APPLICATION FORM</h2>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <b>QUESTION AND ANSWER</b>
        </div>
        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Do you have a high school diploma or certificate?</p>
          <div>
            <p style={{color:'green', marginLeft:'50px'}}>{univcertDiploma}</p>
            <p style={{color:'green', marginLeft:'50px'}}>School Name: <b>{schoolName}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Subject: <b>{subject}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Year: <b>{year}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Location: <b>{location}</b></p>   
          </div>      
        </div>

        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Did you do university studies?</p>
          <div>
            <p style={{color:'green', marginLeft:'50px'}}>{univcertDiploma}</p>
            <p style={{color:'green', marginLeft:'50px'}}>University Name: <b>{univschoolName}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Faculity: <b>{univsubject}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Year: <b>{univyear}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Location: <b>{univlocation}</b></p>   
          </div>      
        </div>

        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Are you working now?</p>
          <div>
            <p style={{color:'green', marginLeft:'50px'}}>{univcertDiploma}</p>
            <p style={{color:'green', marginLeft:'50px'}}>University Name: <b>{univschoolName}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Faculity: <b>{univsubject}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Year: <b>{univyear}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Location: <b>{univlocation}</b></p>   
          </div>      
        </div>

        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Have you done the internship in the area of your future study?</p>
          <div>
            <p style={{color:'green', marginLeft:'50px'}}>{univcertDiploma}</p>
            <p style={{color:'green', marginLeft:'50px'}}>University Name: <b>{univschoolName}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Faculity: <b>{univsubject}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Year: <b>{univyear}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Location: <b>{univlocation}</b></p>   
          </div>      
        </div>

        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Did you completed successfully one year of university?</p>
          <div>
            <p style={{color:'green', marginLeft:'50px'}}>{univcertDiploma}</p>
            <p style={{color:'green', marginLeft:'50px'}}>Diploma Name: <b>{univschoolName}</b></p>
            
          </div>      
        </div>

        <div style={{display:'flex', margin:'30px', fontSize: '18px'}}>
          <p>Do you volunteer in the area of your future study?</p>
          <div>
            <p style={{color:'green', marginLeft:'50px'}}>{univcertDiploma}</p>
            <p style={{color:'green', marginLeft:'50px'}}>University Name: <b>{univschoolName}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Faculity: <b>{univsubject}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Year: <b>{univyear}</b></p>
            <p style={{color:'green', marginLeft:'50px'}}>Location: <b>{univlocation}</b></p>   
          </div>      
        </div>

      </div>
    </div>
  );
}
export default CheckList