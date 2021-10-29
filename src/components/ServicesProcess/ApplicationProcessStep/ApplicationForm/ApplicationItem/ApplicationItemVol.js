import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
export default function FormControlLabelPlacement(props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"> {props.question}</FormLabel>
      <RadioGroup row aria-label="position" name={props.name} defaultValue="top">
  
          <FormControlLabel
          value="no"
          onChange={props.noChange}
          control={<Radio color="primary" />}
          label="No"
          labelPlacement="no"
        />
 
      {props.yesvol?
       <>
          <FormControlLabel
          value="Please Add other degree you have"
          onChange={props.yesChange}
          control={<Radio color="primary" />}
          label="YES"
          labelPlacement="YES"
        />
         {props.input}</>:null}
       
      </RadioGroup>
    </FormControl>
  );
}
