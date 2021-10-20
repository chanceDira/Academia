import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition(props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.question}</FormLabel>
      <FormGroup aria-label="position" row>
        {/* <FormControlLabel
          value="top"
          control={<Checkbox color="primary" />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        /> */}

        <FormControlLabel
          value="english"
          control={<Checkbox color="primary" />}
          label="English"
          labelPlacement="english"
        />
           <FormControlLabel
          value="french"
          control={<Checkbox color="primary" />}
          label="French"
          labelPlacement="french"
        />
          {props.otherL?
        <div style={{display:'flex'}}>
          <FormControlLabel
          value="Please Add other language you know"
          onChange={props.otherLchange}
          control={<Checkbox color="primary" />}
          label="OTHER"
          labelPlacement="other"
        />
         {props.input}</div>:null}
       
       
      </FormGroup>
    </FormControl>
  );
}
