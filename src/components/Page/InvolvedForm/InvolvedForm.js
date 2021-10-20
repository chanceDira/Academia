import React, {useState, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'; 
import axios from '../../../axios'

import {AuthContext}from'../../../shared/context/auth-context'

// import Country from './Country/Country';
import './InvolvedForm.css';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '70%',
    
    },
  },
}));



export default function ColorTextFields() {
  const classes = useStyles();
  const auth = useContext(AuthContext)
  const [category, setCategory] = useState("Individual");
  const [fullname, setFullname] = useState(auth.fullName);
  const [birthday, setBirthday] = useState("");
  const [district, setDistrict] = useState("");
  const [nationality, setNationality] = useState("select");
  const [province, setProvince] = useState("");
  const [family, setFamily] = useState("");
  const [citycode, setCitycode] = useState("");
  const [genre, setGenre] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState(auth.email);
  const [phone, setPhone] = useState(auth.phone);
  const [pobox, setPobox] = useState("");
  // const [citycode, setCitycode] = useState(" ");
  const changeNationality = (event) =>{
   setNationality( event.target.value);
  }
  const changeCategory = (event) =>{
  setCategory( event.target.value);
  }
  const handleFormSubmit= ( event ) => {
     event.preventDefault();
     console.log(auth.phone)
     let formData = new FormData();    //formdata object
     let url='http://localhost:5000/involvement'
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
     formData.append('gender', genre)
     formData.append('creator',auth.userId)
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
       console.log(response)
    
     })
     .catch(function (err) {
         //handle error
         console.log(err)
     });
    }


  return (
    <div className="involved-container">
      <form method="post" enctype="multipart/form-data" className={classes.root} className="involved-row" noValidate autoComplete="off">
      <h1>Hello {fullname} work with us </h1>
      <h2>Fill the form</h2>
      <div>
      <select class="form-select" aria-label="Default select example" onChange={changeCategory} value={category}>
          <option selected >Category</option>
          <option value="Rwanda"  >Individual</option>
          <option value="Translate" >Translate</option>
          <option value="Proffessionals">Proffessionals</option>
          <option value="Private_company">Private company</option>
          <option value="Public_Institution">Public Institution</option>
          <option value="Organization" >Organization</option>
          <option value="Institution">Institution</option>
        </select>
        </div>
        <br/>
     
      <div>
        <TextField 
        id="standard-secondary"
        required
        label="Full Name" color="secondary" value={fullname}   className="input-location-involved"/>
        </div>
        <br />
        <div>
        <span>Birth Day </span>
      <input type="date" id="birthday" name="birthday" value={birthday} className="input-location-involved" onChange={e => setBirthday(e.target.value )} />
       </div>
       <div>
        <TextField id="standard-secondary"   required label="District" color="secondary" value={district} onChange={e => setDistrict(e.target.value)}  className="input-location-involved" />
        </div>
        <div>
        <TextField id="standard-secondary" label="City/Province" color="secondary" value={province}  onChange={e => setProvince(e.target.value)}  className="input-location-involved" />
        </div>
        <br/>
        <div>
        <select class="form-select" aria-label="Default select example" onChange={changeNationality} value={nationality}>
          <option selected >Select Nationality</option>
          <option value="Rwanda"  onChange={e => setNationality('Rwandan')}>Rwandan</option>
          <option value="German" onChange={e => setNationality('German')}>German</option>
          <option value="Other" onChange={e => setNationality('Other')}>Other</option>
        </select>
        </div>
        <br/>
    <div>
    <TextField id="standard-secondary" label="Phone Number" color="secondary"  className="input-location-involved" value={phone}  onChange={e => setPhone(e.target.value)}/>
    </div>
    <div>
    <TextField id="standard-secondary" label="E-Mail" color="secondary"  className="input-location-involved" value={email} onChange={e => setEmail(e.target.value)}/>
    </div>
    <div>
    <TextField id="standard-secondary" label="Street" color="secondary"  className="input-location-involved" value={ street} onChange={e => setStreet(e.target.value)}/>
    </div>
    <div>
    <TextField id="standard-secondary" label="City code" color="secondary"  className="input-location-involved" value={ citycode} onChange={e => setCitycode(e.target.value)}/>
    </div>
    <div>
    <TextField id="standard-secondary" label="Other ( Po Box,…….)" color="secondary"  className="input-location-involved" value={ pobox} onChange={e => setPobox(e.target.value)}/>
    </div>
    <div>
    <TextField id="standard-secondary" label="Website/Social media" color="secondary"  className="input-location-involved" value={ pobox} onChange={e => setPobox(e.target.value)}/>
    </div>
    <div className="button-involved">
    <button type="submit"  onClick={e =>  handleFormSubmit(e)} >SUBMIT</button>
     </div> 
     <br />
     <br />
      </form>

  </div>
  );
}
