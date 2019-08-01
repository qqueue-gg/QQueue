import React from 'react';
import { useState } from 'react';
import { AppBar, Button, Input, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}));

// TODO: add a handle click that checks user and pass against DB, if match
// set updateLoggedIn(true)

function LoginBar(props) {
  const [failure, updateFailure] = useState(false);
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const classes = useStyles();

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
    <div>
      <Snackbar open={failure} autoHideDuration={1500} onClose={() => updateFailure(false)} message={<span id="success">Wrong Username / Password</span>} />
      <AppBar>
        <form>
          <Input placeholder="username" onChange={handleChange('username')}/>
          <Input placeholder="password" onChange={handleChange('password')}/>
          <Button onClick={handleClick}>Log In</Button>
        </form>
      </AppBar>
    </div>
  )
}

export default LoginBar;
