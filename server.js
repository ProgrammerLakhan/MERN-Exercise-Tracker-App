const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = "mongodb+srv://<username>:<password>@cluster0.wwfyh.mongodb.net/test?retryWrites=true&w=majority";
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(uri,connectionParams)
    .then( () => {
        console.log('Connected to MongoDB.');
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("We are connected to mongodb atlas successfully.");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercise',exercisesRouter);
app.use('/user',usersRouter);

app.listen(port,()=> {
    console.log(`Server is running on port: ${port}`);
});
