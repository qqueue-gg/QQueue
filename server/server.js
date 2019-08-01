const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketIo = require("socket.io");

const server = require('http').createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

// Connect to mLab database
mongoose.connect('mongodb://TeamQQueue:qq4thewin@ds257507.mlab.com:57507/qqueue', {useNewUrlParser: true}, (err, db) => {
  if(err) throw err;
  console.log('>> Connection successful <<');
});

const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/teamRoutes');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messagesRoutes');

/*   Routing Endpoints     */
app.use('/user', userRoutes);
app.use('/team', teamRoutes);
app.use('/auth', authRoutes);
app.use('/message', messageRoutes);

app.get('/', (req, res) => {
  res.send("i'm gilbert")
});

/* Socket IO Logic */
io.on("connection", socket => {
  // when component unmounts, this should log
  socket.on('disconnect', ()=>{console.log('woohoo, we left / disconnected')});

  // join this 'room', a unique room name made up of two user's strings
  socket.on('joinOurRoom', ( ourRoom ) =>{
    socket.join(ourRoom);
  });
  // gotta leave previous room or you'll risk emitting to previously selected rooms the same message
  socket.on('leaveOurRoom', ( roomLeaving ) =>{
    socket.leave(roomLeaving);
  });

  // Chat message logic
  socket.on('chat', ( messageSent, roomName, player1, player2 ) =>{
    // add logic to send the message to the db
    io.to(roomName).emit(messageSent)
  });
   socket.emit('room', true);
})


// Handle invalid route
// app.use((req, res, next) => {
//   res.status(404).send('404: NOT FOUND');
// });

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send(err);
})


server.listen(8080, () => console.log('gilbert is always watching'));
