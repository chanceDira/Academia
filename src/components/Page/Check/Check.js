import React, {useState, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from '../../../axios'
import {AuthContext}from'../../../shared/context/auth-context'
import { Link } from 'react-router-dom';
import './Check.css';
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
  return (
    <form method="post" enctype="multipart/form-data" className="form-check">
    <h1>Welcome {fullname}	</h1>
    <h2>Check  your email to confirm</h2>


    <Link to="/login-process"><div  className="check">BACK</div></Link>
    </form>
  );
}
