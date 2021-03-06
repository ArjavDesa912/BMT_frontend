import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import admin from './Admin';
import {useState} from 'react';

const dashRedirect =()=>{
  return <Redirect from='/login' to='/admin/dashboard'/>
        
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('')
  const [auth, setAuth] = useState(false)
  const onSubmit =(e) =>{
     e.preventDefault()
    if(email=='admin@admin.com'& pass=='admin'){
        setAuth(true)

    }
    else{
      alert('enter correct Credentials')
    }
     
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value= {email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value ={pass}
            onChange={(e) => setPass(e.target.value)}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={()=>{ history.push('/admin/dashboard') }}
          >
            Sign In
          </Button>
          {auth &&<Route render={({ history}) => ( history.push('/admin/dashboard') )} />}

          <Grid container>
            
          </Grid>
        </form>
      </div>
      <Box mt={8}>
       
      </Box>
    </Container>
  );
}