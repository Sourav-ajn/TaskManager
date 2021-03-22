const mongoose = require('mongoose');
const dotenv=require('dotenv');

dotenv.config({path : './config.env'});


mongoose.connect(process.env.DATABASE_URI , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=>{
    console.log("DB connection successul")
})