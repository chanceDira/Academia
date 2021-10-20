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
      
      
        {/* <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="Top"
          labelPlacement="top"
        /> */}
       <div style={{display:'flex'}}>
       <FormControlLabel
          value="yes"
          onChange={props.yesChange}
          name="certificate"
          control={<Radio color="primary" />}
          label="YES"
          labelPlacement="yes"
        />
          <FormControlLabel
          value="no"
          onChange={props.noChange}
          control={<Radio color="primary" />}
          label="No"
          labelPlacement="no"
        />
        {props.other?
        <div style={{display:'flex'}}>
          <FormControlLabel
          value="other"
          onChange={props.otherChange}
          control={<Radio color="primary" />}
          label="OTHER"
          labelPlacement="other"
        />
         {props.input}</div>:null}
       </div>
      <div>

      </div>
       
        
        {/* <FormControlLabel
          value="bottom"
          control={<Radio color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        /> */}
        {/* <FormControlLabel value="end" control={<Radio color="primary" />} label="End" /> */}
      </RadioGroup>
    </FormControl>
  );
}
