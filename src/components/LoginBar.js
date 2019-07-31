import React from 'react';
import { useState } from 'react';
import { AppBar, Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}));

// TODO: add a handle click that checks user and pass against DB, if match
// set updateLoggedIn(true)

function LoginBar(props) {
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const classes = useStyles();
  // props.updateCurrUser
  // check if user / pass matches
  // if matches, set updateLoggedIn(true), set current user to found user's data
  // and get all their data
  function handleClick() {
    const { username, password } = loginValues;
    fetch('http://localhost:8080/auth/getUser', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(res => res.json())
      .then(res => {
        console.log('res:', res);
      });
  }

  const handleChange = name => event => {
    setLoginValues({ ...loginValues, [name]: event.target.value });
  }

  return (
    <AppBar>
      <form>
        <Input placeholder="username" onChange={handleChange('username')}/>
        <Input placeholder="password" onChange={handleChange('password')}/>
        <Button onClick={handleClick}>Log In</Button>
      </form>
    </AppBar>
  )
}

export default LoginBar;
