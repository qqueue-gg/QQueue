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
import { S_IFMT } from 'constants';

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
      messageHistory: [],
      currRoom: '',
      messageToSend: ''
    }
    this.fetchOurMessages = this.fetchOurMessages.bind(this);

    this.socketPostMessage = this.socketPostMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }
  updateMessage(e) {
    console.log('the message sending', e.target.value)
    this.setState({
      messageToSend: e.target.value
    })
  }

  socketPostMessage(e){
    e.preventDefault();
    const currRoom = this.state.currRoom;

    const me = this.props.currUser.username;
    const recipient = this.state.currMessaging;
    const date = Date.now();
    let numID = Math.floor(Math.random() * 1000)
    console.log(numID)
    let message = this.state.messageToSend;

    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    

    let onlyMsg = {
      created: `${date}`,
      _id: numID,
      author: me,
      message: message
    }; 

    let newMessage = JSON.stringify({
      partyOne: me,
      partyTwo: recipient,
      messages: [{
        author: me,
        message: message,
      }]
    })
    
    document.querySelector('#input').value = '';
    socket.emit('chat', newMessage, onlyMsg, currRoom);
  }


  fetchOurMessages(e, party2){
    // fetch and setState variables
    const currUser = this.props.currUser.username;
    const ourMsgHistory = [];
    // Socket variables
    const ourRoomName = currUser + party2;
    let lastRoom = this.state.currRoom;
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);

    fetch('http://localhost:8080/message/getOurConvo', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "partyOne": currUser,
        "partyTwo": party2
      })
    })
    .then(res => {
      return res.json();
    })
    .then(ourConvo => {
      console.log('ourConvo', ourConvo)
      const messageArr = ourConvo[0]["messages"];
      if(messageArr) messageArr.forEach((message) => ourMsgHistory.push(message));
    })
    .then( oops => {
      this.setState({
        currMessaging: party2,
        messageHistory: ourMsgHistory,
        currRoom: ourRoomName
       });  
       
  
       socket.emit('joinOurRoom', ourRoomName);
       if(ourRoomName !== lastRoom) socket.emit('leaveOurRoom', lastRoom);
       // leave room and join
    }).then(()=>{
      socket.on('chat', messageReceived =>{
        console.log('received the boomeranged message', messageReceived)
        const messageHistory = this.state.messageHistory.slice();
        messageHistory.push(messageReceived);
        this.setState({ messageHistory: messageHistory });
    })
  });
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
      if(firstRecipient){
        firstRecipient = firstRecipient["partyTwo"]
      } 
      console.log('history b4 seeting state', getHistory)
      let ourRoomName = currUser + firstRecipient;
      this.setState({
        messageRecipients : setStateMessageRecipients,
        messageHistory : getHistory,
        currMessaging: firstRecipient,
        currRoom: ourRoomName
      });
      
      // join room **********
      
    })
    .then(() => { socket.on('chat', messageReceived =>{
      console.log('received the boomeranged message', messageReceived)
      const messageHistory = this.state.messageHistory.slice();
      messageHistory.push(messageReceived);
      this.setState({ messageHistory: messageHistory });
    })})
    .then(() => socket.emit('joinOurRoom', this.state.currRoom))
  }

  removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  componentDidUpdate(){
    
  }

  render() {
    console.log('logging all new State', this.state)
    
    // create buttons for each person I'm messaging 
    const contactList = this.state.messageRecipients;
    const ButtonList = contactList.map((user) => {
     return <Button style={{backgroundColor: "#FDC982"}} className={user} onClick={(e) =>{this.fetchOurMessages(e, user)}} >{user}</Button>
    });
    console.log(ButtonList);

    return(
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Typography component="div" style={{ marginTop: "5rem", backgroundColor: '#cfe8fc', height: '80vh'}} >
          {this.removeDuplicates(this.state.messageHistory, 'message').map(message => {
            return(
              <div style={{textAlign: message.author === this.props.currUser.username ?
                "left" : "right"
              }}>
                <h4>{message.author}</h4>
                <p>{message.message}</p>
              </div>
            )
          })}
          </Typography>
          <div className={"contactHolder"}>
          {ButtonList}
          </div>  
        </Container>
        <InputLabel > Message 

        </InputLabel>
        <Input id="input" onChange={(e) => {this.updateMessage(e)}} ref={ el => this.msgInput = el} className={'messageInput'} style={{backgroundColor: '#cfe8fc'}}  /> <Button onClick={(e) => {this.socketPostMessage(e)}} style={{backgroundColor: '#cfe8fc'}} />
        
      </React.Fragment>
    )
  }
};
export default Messages;