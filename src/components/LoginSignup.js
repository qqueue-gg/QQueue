import React from 'react';
import LoginBar from './LoginBar';
import Signup from './Signup';

function LoginSignup(props) {
  return (
    <div>
      <LoginBar updateLoggedIn={props.updateLoggedIn}/>
      <Signup />
    </div>
  )
}

export default LoginSignup;
