import React from 'react';
import { AppBar, Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}));

// TODO: add a handle click that checks user and pass against DB, if match
// set updateLoggedIn(true)

function LoginBar(props) {
  const classes = useStyles();
  return (
    <AppBar>
      <form>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button onClick={() => props.updateLoggedIn(true)}>Log In</Button>
      </form>
    </AppBar>
  )
}

export default LoginBar;
