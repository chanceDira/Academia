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
        <div style={{display:'flex'}}>
          <FormControlLabel
              value="no"
              onChange={props.noChange}
              control={<Radio color="primary" />}
              label="No"
              labelPlacement="no"
            />

          <FormControlLabel
              value="yes"
              onChange={props.yesChange}
              control={<Radio color="primary" />}
              label="YES"
              labelPlacement="yes"
            />
            {props.yesUnivOne?
          <>
              <FormControlLabel
              value="yes"
              onChange={props.yesChange}
              control={<Radio color="primary" />}
              label="YES"
              labelPlacement="YES"
            />
            {props.input}</>:null}
        </div>
      </RadioGroup>
    </FormControl>
  );
}
