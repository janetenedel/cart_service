const express = require('express');
const app = express();
const cors = require('cors');
const cart = require('./routes/cart');
const port = 7777;

app.use(cors());

//the next line has to come before the other routes
app.use(express.json());
app.use('/cart', cart);

app.listen(port, () => console.log(`app is up and running on port: ${port}`));
