import React from "react";
import { Container, TextField } from "@material-ui/core";

import Team  from './Team.js';

export class Teams extends React.Component {
  constructor(){
    super();

    this.state = {
      teams: [],
      mappedTeams: []
    }
  }

  mapTeams = teams => {
    return teams.map(teams => 
      <Team          
        key={teams._id}
        teamName={teams.teamName} 
        motto={teams.motto}        
        accolades={teams.accolades} 
        bio={teams.bio}               
        createdAt={teams.createdAt}   
        email={teams.email}          
        teamMates={teams.teamMates}       
        primaryGame={teams.primaryGame}   
      />);
  };

  handleSearch = event => {
    let searchTeams = this.state.teams.filter(team => {
      return (
        team.teamName === event.target.value
        || team.motto === event.target.value
        || team.bio === event.target.value 
        || team.email === event.target.value
        || team.primaryGame === event.target.value
      );
    });
    let mappedTeams = searchTeams.length ? this.mapTeams(searchTeams) : this.mapTeams(this.state.teams);
    this.setState({ mappedTeams });
  };

  componentDidMount(){
    fetch('http://localhost:8080/team/getTeams')
    .then(res => {
      return res.json();
    })
    .then(json => {
      this.setState(state => {
        let mappedTeams = this.mapTeams(json);
        let teams = json.slice();
        return {
          teams,
          mappedTeams
        }
      })
    });    
  }

  render(){
    return (
      <Container style={{'margin-top': '3em'}}>
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          className="field"
          margin="normal"
          variant="filled"
          onChange={this.handleSearch}
        />
        {this.state.mappedTeams}
      </Container>
    );
  }
};
