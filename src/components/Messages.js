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
      response: false
    }
    
  }



  componentDidMount(){
    const { endpoint } = this.state;
    console.log('loggin endpoint', endpoint)
    const socket = socketIOClient(endpoint);
    socket.on('room', data => this.setState({response: data}));    
  }

  componentDidUpdate(){
    
  }


  render() {
    console.log('logging response', this.state.response)

    return(
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh'}} />
        </Container>
        <InputLabel > Message </InputLabel>
        <Input className={'messageInput'} style={{backgroundColor: '#cfe8fc'}}  /> <Button style={{backgroundColor: '#cfe8fc'}} />
          

    
      </React.Fragment>
    )
  }
};
export default Messages;