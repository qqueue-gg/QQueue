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

  const mappedUsers = users.map(user =>
    <User
      key={user._id} 
      _id={user._id}
      age={user.age}
      createdAt={user.createdAt}
      email={user.email}
      hobbyGames={user.hobbyGames.map(game => game.game + ' ')}
      isAdmin={user.isAdmin}
      lastSeen={user.lastSeen}
      logo={user.logo}
      primaryGame={user.primaryGame}
      skill={user.skill}
      steamprofile={user.steamProfile}
      timezone={user.timezone}
      username={user.username}
      currentTeam={user.currentTeam}
    />);

  return (
    <Container style={{'marginTop': '3em'}}>
      {mappedUsers}
    </Container>
  );
};
