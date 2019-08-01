import React from 'react';
import LoginBar from './LoginBar';
import Signup from './Signup';

function LoginSignup(props) {
  return (
    <div>
      <LoginBar updateLoggedIn={props.updateLoggedIn} currUser={props.currUser} updateCurrUser={props.updateCurrUser}/>
      <Signup />
    </div>
  )
}

export default LoginSignup;
