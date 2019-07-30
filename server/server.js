const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/userRoutes');

app.get('/', (req, res) => {
  res.send("i'm gilbert")
});

/*   Routing Endpoints     */
app.use('/user', userRoutes);
app.use('/team', teamRoutes);


app.listen(8080, () => 'gilbert is always watching');