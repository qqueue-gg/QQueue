const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/userRoutes');

app.get('/', (req, res) => {
  res.send("i'm gilbert")
});



/*   User Endpoints     */
app.use('/user', userRoutes);
app.use('/team', teamRoutes);



/*    Team EndPoints   */


app.listen(8080, () => 'gilbert is always watching');