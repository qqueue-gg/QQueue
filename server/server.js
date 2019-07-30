const express = require('express');
const app = express();

<<<<<<< HEAD
const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/userRoutes');

app.get('/', (req, res) => {
  res.send("i'm gilbert")
});



/*   User Endpoints     */
app.use('/user', userRoutes);
app.use('/team', teamRoutes);



/*    Team EndPoints   */
=======
app.listen(8080, () => 'gilbert is always watching');
>>>>>>> e3f32f7f3aab57f5a51d584971ed824d15a17323


app.listen(8080, () => 'gilbert is always watching');