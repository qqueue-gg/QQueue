import React from 'react';
import { AppBar, Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}));

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
