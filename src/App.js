import React, { useState } from 'react';
import './App.css';
// import { useRoutes } from 'hookrouter';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Routes from './router';
import { A } from 'hookrouter';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LoginSignup from './components/LoginSignup';
import { Users } from "./components/Users";
import { Teams } from "./components/Teams";
import UserProfile from "./components/UserProfile";
import Messages from "./components/Messages";

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
  const [loggedIn, updateLoggedIn] = useState(false);
  const [currUser, updateCurrUser] = useState({});
  const main = [
    <Router>
      <AppBar className={classes.nav}>
        <Button><Link to="/" className={classes.link}>Users</Link></Button>
        <Button><Link to="/teams" className={classes.link}>Teams</Link></Button>
        <Button><Link to="/profile" className={classes.link}>Profile</Link></Button>
        <Button><Link to="/messages" className={classes.link}>Messages</Link></Button>
      </AppBar>
      <Route exact path="/" component={() => <Users currUser={currUser} />} />
      <Route path="/teams" component={Teams} />
      <Route path="/messages" component={() => <Messages currUser={currUser}/>} />
      <Route path="/profile" component={() => <UserProfile currUser={currUser} />} />
      <Route path="/login" component={LoginSignup} />
    </Router>
  ];
  console.log('checking currUser', currUser)
  return (
    <div className="App">
      {loggedIn ? main : <LoginSignup updateLoggedIn={updateLoggedIn} updateCurrUser={updateCurrUser} currUser={currUser} />}
    </div>
  );
}

export default App;
