import React from 'react';
import { useState } from 'react';
import { Input, InputLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    background: '#F1F1F1',
    padding: '2em',
    'border-radius': '.3em',
    width: '50vw',
    margin: '5em auto',
  },
  input: {
    display: 'block',
    'margin-bottom': '1em',
  },
  button: {
    outline: '1px solid black',
    'border-radius': '1em',
    margin: 'auto',
  }
}));

function Signup(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPw: "",
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function handleSubmit() {
    // alert(JSON.stringify(values));
    const { username, password } = values;
    fetch('http://localhost:8080/user/getUsers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
    }).then(res => {
      if (res.status === 200) console.log('user created successfully');
      else console.log('error');
    })
  }

  // TODO: add validation for matching password and password rules
  // TODO: add password rules as a warning
  // TODO: make password be dots
  return (
    <form className={classes.container}>
      <InputLabel htmlFor="username">Username</InputLabel>
      <Input id="username" name="username" className={classes.input} onChange={handleChange('username')}></Input>
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input id="password" name="password" className={classes.input} onChange={handleChange('password')}></Input>
      <InputLabel htmlFor="confirmPw">Confirm Password</InputLabel>
      <Input id="confirmPw" name="confirmPw" className={classes.input} onChange={handleChange('confirmPw')}></Input>
      <Button onClick={handleSubmit} className={classes.button}>Create Account</Button>
    </form>
  )
}

export default Signup;
