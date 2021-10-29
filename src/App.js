import React, { useState, useCallback } from 'react';
import './App.css'
import InvolvedForm from './components/Page/InvolvedForm/InvolvedForm'
import Register from './components/Page/Register/Register'
import Login from './components/Page/Login/Login'
import Home from './container/HomeCenter/Home'
import About from './container/AboutCenter/AboutCenter'
import Services from './container/ServicesCenter/ServicesCenter'
import OurStory from './components/OurStory/OurStory'
import Contact from './container/ContactCenter/ContactCenter'
import Faq from './container/FaqCenter/FaqCenter'
import GetInvolved from './container/GetCenter/GetCenter'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import Nav from './components/Navigation/Contacts/Contacts'
import OurTeam from './components/OurTeam/OurTeam'
import Auth from './user/pages/Auth'

import ApprenticeshipProcessFront from './components/ServicesProcess/ServicesProcessFront/ApprenticeshipProcessFront/ApprenticeshipProcessFront'
import AuthProcess from './components/ServicesProcess/user/pages/Auth'
import AuthInvolved from './components/Page/GetInvolved/user/pages/Auth'

import StartEligibility from './components/ServicesProcess/StartEligibility/Apprenticeship/StartEligibility'
import ApprenticeshipProcessStarting from './components/ServicesProcess/ServicesProcess'
import ApprenticeshipProcessProceeding from './components/ServicesProcess/ServicesProcessProceeding'
import Check from './components/Page/Check/Check'
import Confirm from './components/Page/Confirm/Confirm'

import TrainingProcessFront from './components/ServicesProcess/ServicesProcessFront/TrainingProcessFront/TrainingProcessFront'
import StudyingProcessFront from './components/ServicesProcess/ServicesProcessFront/StudyingProcessFront/StudyingProcessFront'
import AupairProcessFront from './components/ServicesProcess/ServicesProcessFront/AupairProcessFront/AupairProcessFront'
import InternshipProcessFront from './components/ServicesProcess/ServicesProcessFront/InternshipProcessFront/InternshipProcessFront'
import VolunteeringProcessFront from './components/ServicesProcess/ServicesProcessFront/VolunteeringProcessFront/VolunteeringProcessFront'
import WorkingProcessFront from './components/ServicesProcess/ServicesProcessFront/WorkingProcessFront/WorkingProcessFront'

import LanguageProcessFront from './components/ServicesProcess/ServicesProcessFront/LanguageProcessFront/LanguageProcessFront'
import LanguageProcessStart from './components/ServicesProcess/StartEligibility/Language/StartEligibility'
import LanguageProcessStarting from './components/ServicesProcess/LanguageServicesProcess'
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import { AuthContext } from './shared/context/auth-context';

const  App = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(false);
    const [fullName, setFullName] = useState(false);
    const [email, setEmail] = useState(false);
    const [phone, setPhone] = useState(false);
    const [token, setToken] = useState(false);
    const login =useCallback((uid, fullName, email, phone, token) =>{
        setIsLoggedIn(true);
        setUserId(uid);
        setFullName(fullName);
        setEmail(email);
        setPhone(phone);
        setToken(token);
    }, [])
    const logout =useCallback((uid) =>{
        setIsLoggedIn(true);
        setUserId(null);
        setFullName(null);
        setEmail(null);
        setPhone(null);
        setToken(null);
    }, [])
        
        return(
      <AuthContext.Provider
      value={{ 
        isLoggedIn: isLoggedIn,
        userId:userId,
        fullName:fullName,
        email:email,
        phone:phone, 
        token:token,
        login: login,
        logout: logout }}
      >
          <BrowserRouter>
            
            <Switch>
                <Route path="/register" exact component ={Register} />
                <Route path="/login" exact component ={Auth} />
                <Route path="/login-process" exact component ={AuthProcess} />
                <Route path="/login-involved" exact component ={AuthInvolved } />
                <Route path="/ourstory" exact component ={<OurStory />} ><Nav /><Toolbar /><OurStory /></Route>
                <Route path="/ourteam" exact component ={<OurTeam />} ><Nav /><Toolbar /><OurTeam /></Route>
                <Route path="/about" exact component ={About} />
                <Route path="/services" exact component ={Services} />
                <Route path="/contact" exact component ={Contact} />
                <Route path="/involved" exact component ={GetInvolved} />
                <Route path="/faq" exact component ={Faq} />
                <Route path="/check" exact component ={Check} />
                <Route path="/confirm" exact component ={Confirm} />
                <Route path="/" exact component ={Home} />

                <Route path="/involvedform" exact component ={InvolvedForm} />
                <Route path="/apprenticeship-process-front"exact component ={ApprenticeshipProcessFront} />
                <Route path="/apprenticeship-process-start"exact component ={StartEligibility} />
                <Route path="/apprenticeship-process-starting"exact component ={ApprenticeshipProcessStarting} />
                <Route path="/apprenticeship-process-proceeding"exact component ={ApprenticeshipProcessProceeding} />
                
                <Route path="/language-process-starting"exact component ={LanguageProcessStarting} />
                <Route path="/language-process-front"exact component ={LanguageProcessFront} />
                <Route path="/language-process-start"exact component ={LanguageProcessStart} />

                <Route path="/training-process-front"exact component ={TrainingProcessFront} />
                <Route path="/studying-process-front"exact component ={StudyingProcessFront} />
                <Route path="/Aupair-process-front"exact component ={AupairProcessFront} />
                <Route path="/Internship-process-front"exact component ={InternshipProcessFront} />
                <Route path="/Volunteering-process-front"exact component ={VolunteeringProcessFront} />
                <Route path="/Working-process-front"exact component ={WorkingProcessFront} />
            </Switch>   
       
      </BrowserRouter>
      </AuthContext.Provider>   
          
       
     )
    }

export default App