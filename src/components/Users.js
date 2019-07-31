import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";

import { User } from './User';


export const Users = () => {
  // iterate over users and render User components

  // useState hook to store local state - users retrieved from database
  const [users, setUsers] = useState([]);

  // useEffect lifecycle method componentDidMount

  useEffect(() => {
    fetch('http://localhost:8080/user/getUsers')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setUsers([...json]);
      })
  }, []);

  console.log('OUTSIDE: ', users);

  return (
    <Container style={{'margin-top': '3em'}}>
      <User />
    </Container>
  );
};
