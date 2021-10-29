import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition(props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.question}</FormLabel>
      <RadioGroup row aria-label="position" name={props.name} defaultValue="top">

        <FormControlLabel
          value="a1"
          control={<Radio color="primary" />}
          label="A1"
          labelPlacement="a1"
        />
           <FormControlLabel
          value="a2"
          control={<Radio color="primary" />}
          label="A2"
          labelPlacement="a2"
        />


        <FormControlLabel
          value="b1"
          control={<Radio color="primary" />}
          label="B1"
          labelPlacement="b1"
        />
           <FormControlLabel
          value="b2"
          control={<Radio color="primary" />}
          label="B2"
          labelPlacement="b2"
        />
            <FormControlLabel
          value="c1"
          control={<Radio color="primary" />}
          label="C1"
          labelPlacement="c1"
        />

             <FormControlLabel
          value="c2"
          control={<Radio color="primary" />}
          label="C2"
          labelPlacement="c2"
        />
           
          
       
       
      </RadioGroup>
    </FormControl>
  );
}
