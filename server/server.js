const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

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

/*   Routing Endpoints     */
app.use('/user', userRoutes);
app.use('/team', teamRoutes);

app.get('/', (req, res) => {
  res.send("i'm gilbert")
});

// Handle invalid route
app.use((req, res, next) => {
  res.status(404).send('404: NOT FOUND');
});

// Global error handler
app.use((err, req, res, next) => {
  if(err) res.status(404).send('404: NOT FOUND');
})

app.listen(8080, () => 'gilbert is always watching');