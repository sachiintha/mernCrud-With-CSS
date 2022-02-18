const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const PostRoutes = require('./routes/posts');

//app middlewear
app.use(bodyParser.json());
app.use(cors());

//route  middleware
app.use(PostRoutes);

const port = 4141;
const DB_URL = 'mongodb+srv://sachi:sachi@sachintha.6itvf.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL)

.then(()=>{
    console.log('DB Connected');
})

.catch((err)=> console.log('DB Connection error',err));

app.listen(port, () =>{
    console.log(`App is running on ${port}`)
});