import React from 'react';
import { useState } from 'react';
import { Input, InputLabel, Button, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// TODO: fix button outline styling (hover is rounded, border is not)
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
    email: "",
    password: "",
    confirmPw: "",
  });

  const [success, updateSuccess] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function handleSubmit() {
    const { username, password, email } = values;
    fetch('http://localhost:8080/user/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, email }),
    }).then(res => {
      if (res.status === 200) {
        updateSuccess(true);
      }
    }).catch(err => {
      console.log(err);
    })
  }

  // TODO: add validation for matching password and password rules
  // TODO: add validation for username already taken
  // TODO: add validation for valid email
  // TODO: add password rules as a warning
  // TODO: change success popup position
  return (
    <div>
      <Snackbar open={success} autoHideDuration={1500} onClose={() => updateSuccess(false)} message={<span id="success">Account Created!</span>} />
      <form className={classes.container}>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input id="username" name="username" className={classes.input} onChange={handleChange('username')}></Input>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" name="email" className={classes.input} onChange={handleChange('email')}></Input>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" name="password" type="password" className={classes.input} onChange={handleChange('password')}></Input>
        <InputLabel htmlFor="confirmPw">Confirm Password</InputLabel>
        <Input id="confirmPw" name="confirmPw" className={classes.input} onChange={handleChange('confirmPw')}></Input>
        <Button onClick={handleSubmit} className={classes.button}>Create Account</Button>
      </form>
    </div>
  )
}

export default Signup;
