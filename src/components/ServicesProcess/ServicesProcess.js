import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Profile from '../../components/Page/Profile/Profile';
import CheckList from '../../components/Page/ChecklistForm/ChecklistForm';
import PdfGenerator from '../../components/Tools/PdfGeneretor/PdfGeneretor'
import ApplicationForm from './ApplicationProcessStep/ApplicationForm/ApplicationForm';
import Typography from '@material-ui/core/Typography';
import Eligibility from './ApplicationProcessStep/ApprenticeshipEligibilityForm/EligibilityForm';
import Example from '../Tools/PdfGeneretor/Example';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {

  return ['Eligibility', 'Profile', 'Apply', 'Checklist'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
          <div style={{margin:'50px'}}>
            <Eligibility />
            
          </div>
      
      );
    case 1:
      return (
        <div style={{margin:'50px'}}>
          <Profile />
        </div>
    
    );
    case 2:
      return (
        <div style={{margin:'50px'}}>
          <ApplicationForm />
        </div>
      )
    case 3:
        return (
        <div style={{margin:'50px'}}>
          <Example />
        <Link to="/apprenticeship-process-proceeding">NEXT STEP</Link>
        </div>)
  }
}

export default function HorizontalNonLinearStepper() {
  const history = useHistory ()
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? 
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  const handleJump = () => {
    
    history.push('/apprenticeship-process-proceeding')
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you are about to finish
            </Typography>
            <Button onClick={handleJump}>JUMP TO NEXT STEP</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>            
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'CONTINUE'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
