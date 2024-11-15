const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();
require('./db/connection')

const todoRoutes=require('./Routes/todoRoutes')
app.use('/todoapp',todoRoutes)




const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
