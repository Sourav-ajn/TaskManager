const express= require('express');
const cors = require('cors')
require('./utility/db');
const userRouter = require('./route/userRoute')
const taskRouter = require('./route/taskRoute')
const dotenv=require('dotenv');

dotenv.config({path : './config.env'});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
// Route
app.use(userRouter);
app.use(taskRouter);

app.listen(port, (req,res)=>{
    console.log("Server Listening on port",port)
});