import React from 'react';
import { useState } from 'react';
import { AppBar, Button, Input, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  input: {
    margin: '.5em',
  },
  container: {
    'text-align': 'center',
  },
  nav: {
    'background-color': '#57839D',
  }
}));

// TODO: add a handle click that checks user and pass against DB, if match
// set updateLoggedIn(true)

function LoginBar(props) {
  const classes = useStyles();
  const [failure, updateFailure] = useState(false);
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  function handleClick() {
    const { username, password } = loginValues;
    fetch('http://localhost:8080/auth/getUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(res => res.json())
    .then(res => {
      if (res) {
        props.updateCurrUser(res);
        props.updateLoggedIn(true);
      }
      else updateFailure(true);
    });
  }

  const handleChange = name => event => {
    setLoginValues({ ...loginValues, [name]: event.target.value });
  }

  // TODO: change failure popup position
  return (
    <div className={classes.container}>
      <Snackbar open={failure} autoHideDuration={1500} onClose={() => updateFailure(false)} message={<span id="success">Wrong Username / Password</span>} />
      <AppBar className={classes.nav}>
        <form>
          <Input placeholder="username" className={classes.input} onChange={handleChange('username')}/>
          <Input placeholder="password" className={classes.input} type="password" onChange={handleChange('password')}/>
          <Button onClick={handleClick}>Log In</Button>
        </form>
      </AppBar>
    </div>
  )
}

export default LoginBar;
