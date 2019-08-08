import React from "react";
import { Container, TextField } from "@material-ui/core";
import '../App.css';

import { User } from './User';
import { ThreeSixtyRounded, ContactsOutlined } from "@material-ui/icons";

export class Users extends React.Component {
  constructor(){
    super();

    this.state = {
      users: [],
      mappedUsers: []
    }
    this.createNewMessage = this.createNewMessage.bind(this);
  }

  createNewMessage = (event, recipient) => {
    const loggedIn = this.props.currUser.username
    console.log('both', loggedIn, recipient)
    fetch('http://localhost:8080/message/addMessage', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "partyOne": loggedIn,
        "partyTwo": recipient
      })
    });
    console.log('created new user. Party1:', loggedIn, 'Party2', recipient);
  }

  mapUsers = userArray => {
    return userArray.map(user =>
      <User
        key={user._id} 
        _id={user._id}
        age={user.age}
        createdAt={user.createdAt}
        email={user.email}
        hobbyGames={user.hobbyGames.map(game => game + ' ')}
        isAdmin={user.isAdmin}
        lastSeen={user.lastSeen}
        logo={user.logo}
        primaryGame={user.primaryGame}
        skill={user.skill}
        steamprofile={user.steamProfile}
        timezone={user.timezone}
        username={user.username}
        currentTeam={user.currentTeam}
        createNewMessage={this.createNewMessage}
      />);
  };

  handleSearch = event => {
    let searchUsers = this.state.users.filter(user => {
      return (
        user.username === event.target.value
        || user.skill === event.target.value
        || user.timezone === event.target.value 
        || user.currentTeam === event.target.value
      );
    });
    let mappedUsers = searchUsers.length ? this.mapUsers(searchUsers) : this.mapUsers(this.state.users);
    this.setState({ mappedUsers });
  };

  componentDidMount(){
    fetch('http://localhost:8080/user/getUsers')
    .then(res => {
      return res.json();
    })
    .then(json => {
      this.setState(state => {
        let mappedUsers = this.mapUsers(json);
        let users = json.slice();
        return {
          users,
          mappedUsers
        }
      })
    });
  }
  
  render(){
    return (
      <Container style={{'marginTop': '3em'}}>
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            className="field"
            margin="normal"
            variant="filled"
            onChange={this.handleSearch}
          />
        {this.state.mappedUsers}
      </Container>
    );
  }
};
