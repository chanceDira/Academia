import React, {useState, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'; 
import axios from '../../../axios'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {AuthContext}from'../../../shared/context/auth-context'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import Country from './Country/Country';
import './Profile.css';
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
  const [fullname, setFullname] = useState(auth.fullName);
  const [birthday, setBirthday] = useState("");
  const [district, setDistrict] = useState("");
  const [nationality, setNationality] = useState("");
  const [province, setProvince] = useState("");
  const [family, setFamily] = useState("male");
  const [citycode, setCitycode] = useState("");
  const [gender, setGenre] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState(auth.email);
  const [phone, setPhone] = useState(auth.phone);
  const [pobox, setPobox] = useState("");
  // const [citycode, setCitycode] = useState(" ");
  const handleFormSubmit= ( event ) => {
     event.preventDefault();
     let formData = new FormData();    //formdata object
     let url='http://localhost:5000/profile'
     formData.append('fullName', fullname)
     formData.append('birthday', birthday)
     formData.append('district', district)
     formData.append('city_province', province)
     formData.append('country',nationality)
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
     console.log("izzz",json)
    
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
    <form method="post" enctype="multipart/form-data" className={classes.root} noValidate autoComplete="off">
    <h1>WELCOME {fullname} COMPLETE YOUR PROFILE</h1>
    <h2>Background</h2>
      <TextField 
      id="standard-secondary"
      required
      label="Full Name" color="secondary" value={fullname}  onChange={e => setFullname(e.target.value )} className="input-cover" />
      {/* <label for="birthday">Birthday:</label> */}
      <p>Birth Day </p>
      <input type="date" id="birthday" name="birthday" value={birthday} onChange={e => setBirthday(e.target.value )} />

      <TextField id="standard-secondary"   required label="District" color="secondary" value={district} onChange={e => setDistrict(e.target.value)}  className="input-location" />
     <TextField id="standard-secondary" label="City/Province" color="secondary" value={province}  onChange={e => setProvince(e.target.value)} className="input-location" />
      {/* <label for="birthday">Location:</label> */}
      
      <select class="form-select" aria-label="Default select example"onChange={e => setNationality('Rwandan')}>
        <option selected >Select Nationality</option>
        <option value="Rwanda" >Rwandan</option>
        <option value="German" onChange={e => setNationality('German')}>German</option>
        <option value="German" onChange={e => setNationality('Other')}>Other</option>
      </select>
      <FormControl component="fieldset">
      <FormLabel component="legend"> Gender</FormLabel>
      <RadioGroup row aria-label="position" name="gender" defaultValue="top">
      <FormControlLabel
          value="male"
          control={<Radio color="primary" />}
          onChange={e => setGenre(e.target.value)}
          label="MALE"
          labelPlacement="male"
        />
          <FormControlLabel
          value="female"
          control={<Radio color="primary"  />}
          onChange={e => setGenre(e.target.value)}
          label="FEMALE"
          labelPlacement="Female"
        />
         </RadioGroup>
    </FormControl>
    <select class="form-select" aria-label="Default select example">
      <option selected>Select Family Status</option>
      <option value="1"  onChange={e => setFamily(e.target.value)}>Single</option>
      <option value="2"  onChange={e => setFamily(e.target.value)}>engaged</option>
      <option value="4"  onChange={e => setFamily(e.target.value)}>married</option>
      <option value="5"  onChange={e => setFamily(e.target.value)}>separated</option>
      <option value="6"  onChange={e => setFamily(e.target.value)}>divorced</option>
      <option value="7"  onChange={e => setFamily(e.target.value)}>widow</option>
    </select>

  <h2>Contact information	</h2>
  <TextField id="standard-secondary" label="Phone Number (Whatsapp Number) (verify code)	" color="secondary"  className="input-location" value={phone}  onChange={e => setPhone(e.target.value)}/>
  <TextField id="standard-secondary" label="E-Mail" color="secondary"  className="input-location" value={email} onChange={e => setEmail(e.target.value)}/>
  <TextField id="standard-secondary" label="Street" color="secondary"  className="input-location" value={ street} onChange={e => setStreet(e.target.value)}/>
  <TextField id="standard-secondary" label="City code" color="secondary"  className="input-location" value={ citycode} onChange={e => setCitycode(e.target.value)}/>
  <TextField id="standard-secondary" label="Other ( Po Box,…….)" color="secondary"  className="input-location" value={ pobox} onChange={e => setPobox(e.target.value)}/>
  <button type="submit" class="btn btn-primary" onClick={e =>  handleFormSubmit(e)}>SAVE</button>
    </form>
  );
}
