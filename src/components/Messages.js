import React, {Component} from 'react';
import socketIOClient from 'socket.io-client';

import {
  InputLabel,
  Input,
  Box,
  Button,
  Avatar,
  Typography,
  Dialog,
  MenuList,
  makeStyles,
  Container,
  CssBaseline
} from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//   input: {
//     backgroundColor: '#cfe8fc'
//   }
// }));
// const classes = useStyles();

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state ={
      endpoint: "http://localhost:8080",
      response: false,
      messageRecipients: [],
      currMessaging: '',
      messageHistory: []
    }
    
  }



  componentDidMount(){
    // Socket Connection logic
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('room', data => this.setState({response: data}));  

    // variables for fetch logic
    const currUser = this.props.currUser.username;
    const setStateMessageRecipients = [];
    // logic for making a list of people I have active messages with
    fetch('http://localhost:8080/message/getMessengerList', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "partyOne": currUser
      })
    })
    .then(res => {
      return res.json();
    })
    .then(myMessageList => {
      // might want to change this in the future, to get the last person you message
      let firstRecipient = myMessageList[0];
      const getHistory = [];

      myMessageList.forEach((uniqueConversation) => {

        let recipient = uniqueConversation["partyTwo"];
        setStateMessageRecipients.push(recipient);

        if(uniqueConversation === firstRecipient){
           uniqueConversation["messages"].forEach((message) => getHistory.push(message));
        }
      })
      if(firstRecipient) firstRecipient = firstRecipient["partyTwo"]
      this.setState({
        messageRecipients : setStateMessageRecipients,
        messageHistory : getHistory,
        currMessaging: firstRecipient
      });
    })
  }

  componentDidUpdate(){
    
    
  }


  render() {
    console.log('logging all new State', this.state)
    
    // create buttons for each person I'm messaging 
    const contactList = this.state.messageRecipients;
    const ButtonList = contactList.map((user) => {
     return <Button style={{backgroundColor: "#FDC982"}} className={user}>{user}</Button>
    });
    console.log(ButtonList);

    return(
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh'}} />
          <div className={"contactHolder"}>
          {ButtonList}
          </div>  
        </Container>
        <InputLabel > Message </InputLabel>
        <Input className={'messageInput'} style={{backgroundColor: '#cfe8fc'}}  /> <Button style={{backgroundColor: '#cfe8fc'}} />
        
        
    
      </React.Fragment>
    )
  }
};
export default Messages;