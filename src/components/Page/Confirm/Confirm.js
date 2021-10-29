import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from '../../../axios'
import { Link, useLocation, useHistory } from 'react-router-dom';

import './Confirm.css';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '70%',
    
    },
  },
}));



export default function ColorTextFields() {
 

  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  
  const history = useHistory ()
  const handleFormSubmit= ( event ) => {
   
    console.log("id:",id)
     event.preventDefault();
     let formData = new FormData();    //formdata object
     let url=`http://localhost:5000/user/verify/${id}`
     
     axios({
         method: 'PUT',
         url, 
         headers:{'Content-Type': 'application/json; charset=utf-8'}
     }) 
     .then(function (response) {
       console.log(response.data.error)
       if(response.data.error){
         alert(response.data.error)
       }
       else{
        history.push('/login-process')
       }
    
     })
     .catch(function (err) {
         //handle error
         console.log(err)
     });
    }

  return (
    <form method="post" enctype="multipart/form-data" className="form-check">
    <h1>Thank you for registation</h1>
    <h2>Crick the following button to confirm</h2>


  <Link to="/apprenticeship-process-starting"><button type="submit" className="confirm" onClick={e =>  handleFormSubmit(e)}>CONFIRM</button></Link>
    </form>
  );
}
