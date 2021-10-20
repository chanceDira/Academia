import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../../../../../shared/components/UIElements/Card';
import LoadingSpinner from '../../../../../shared/components/UIElements/LoadingSpinner';
import Input from '../../../../../shared/components/FormElements/Input';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../../../../shared/util/validators';
import { useForm } from '../../../../../shared/hooks/form-hook';
import { useHttpClient } from '../../../../../shared/hooks/http-hook';
import { AuthContext } from '../../../../../shared/context/auth-context';
import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError} = useHttpClient()


  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };
const history = useHistory ()
  const authSubmitHandler = async event => {
    event.preventDefault();
  
    if (isLoginMode) {
    try {
      const responseData = await sendRequest(
        'http://localhost:5000/user/login',
        'POST', 
        JSON.stringify({ 
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          })
          ,
         {
          'Content-Type': 'application/json'
        }
      );
      console.log(responseData)
     
      auth.login(
                responseData.id,
                responseData.fullName,
                responseData.email,
                responseData.phone,
                responseData.token)
      history.push('/involvedform')
    
    } catch (err) {
      
    }
       
    } else {
   try {
    const responseData = await sendRequest(
      'http://localhost:5000/user',
      'POST',
      JSON.stringify({
        fullName: formState.inputs.name.value,
        phone: formState.inputs.phone.value,
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
        confimPassword: formState.inputs.confimPassword.value,
        updateStatus: "yes",
        
      }),
       { 'Content-Type': 'application/json'}
    )
    if(responseData.error){
      alert(responseData.error)
    }
    else{
      console.log(responseData.fullName)
      auth.login(
        responseData.id,
        responseData.fullName,
        responseData.email,
        responseData.token);
      history.push('/check')
    }
    history.push('/check')
   } catch (error) {   
   }
    }    
  };
const errorHandler = () => {
 
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <ErrorModal error = {error} onClear={errorHandler}/> */}
       <Card className="authentication"> 
      {isLoading&& <LoadingSpinner asOverlay/>}
      <AccountCircleIcon />
      <h2> {isLoginMode ? 'LOGIN':'SIGNUP' }</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="TextField"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            // errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        <Input
          element="TextField"
          id="email"
          type="email"
          name="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          // errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
           {!isLoginMode && (<Input
          element="TextField"
          id="phone"
          type="phone"
          name="phone"
          label="Phone"
          validators={[VALIDATOR_REQUIRE()]}
          // errorText="Please enter a valid email address."
          onInput={inputHandler}
        />)}
        <Input
          element="TextField"
          id="password"
          type="password"
          label="Password"
          name="password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        />
           {!isLoginMode && (<Input
          element="TextField"
          id="confimPassword"
          type="password"
          label="Confirm Password"
          name="confimPassword"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        />)}
        <Button 
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          type="submit"
         >
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
    </React.Fragment>
   
  );
};

export default Auth;
