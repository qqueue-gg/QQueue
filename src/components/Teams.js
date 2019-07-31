import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";

import Team  from './Team.js';


export const Teams = () => {
  // iterate over users and render User components

  // first el is the 'State', second is the changeState method
  const [teams, setTeams] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:8080/team/getTeams')
      .then(res =>{
        return res.json();
      })
      .then(parsedData =>{
        setTeams([...parsedData]);
      })
  }, []);

  console.log('teams', teams)

  const mappedTeams = teams.map((teams) => {
    return(
      <Team           // 4 
        key={teams._id}
        teamName={teams.teamName} //
        motto={teams.motto}         //
        accolades={teams.accolades} 
        bio={teams.bio}               
        createdAt={teams.createdAt}   
        email={teams.email}           //
        teamMates={teams.teamMates}       
        primaryGame={teams.primaryGame}     //
      />      
    )
  });

  return (
    <Container style={{'margin-top': '3em'}}>
      {mappedTeams}
    </Container>
  );
};
