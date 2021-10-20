import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />

      <div className="">
      <i style={{color:'blue'}}>LET'S TALK</i>
      <h1 style={{color:'black', fontSize:"72",fontWeight:'800'}}>
         Get In Touch
       </h1>
        <form className={classes.form} noValidate>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Phone"
                label="Phone"
                name="Phone"
                autoComplete="lPhone"
              />
 
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="subject"
                label="Subject"
                name="subject"
                autoComplete="subj"
              />
 
            </Grid>
            <Grid item xs={12}  sm={12}>
              <TextField


            id="message"
            label="Your Message"
            multiline
            rows={4}
            // defaultValue="Default Value"
            variant="outlined"
            required
            fullWidth
            name="message"
            autoComplete="message"
              />
            </Grid>
      
          </Grid>


          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit Now
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
               
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}