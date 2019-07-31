import React from 'react';
import './App.css';
import { useRoutes } from 'hookrouter';
import Routes from './router';
import { A } from 'hookrouter';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LoginSignup from './components/LoginSignup';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  nav: {
    display: 'block',
    color: '#3C3BFF',
  },
  link: {
    'text-decoration': 'none',
    color: 'white',
  },
}));

function App() {
  const classes = useStyles();
  const routeResult = useRoutes(Routes);
  const [loggedIn, updateLoggedIn] = useState(false);
  const main = [
    <AppBar className={classes.nav}>
      <Button><A href="/" className={classes.link}>Users</A></Button>
      <Button><A href="/teams" className={classes.link}>Teams</A></Button>
      <Button><A href="/profile" className={classes.link}>Profile</A></Button>
      <Button> <A href="/messages" className={classes.link}>Messages</A> </Button>
    </AppBar>,
    routeResult
  ];

  return (
    <div className="App">
      {loggedIn ? main : <LoginSignup updateLoggedIn={updateLoggedIn} />}
    </div>
  );
}

export default App;
