const express=require('express');
const jwt = require('jsonwebtoken');
const dotEnv=require('dotenv');
const mongoose=require('mongoose');
const bodyparer=require('body-parser');
const registerroute=require('./routes/registrationroute');
const loginroute=require('./routes/loginroute');
const postroute=require('./routes/postroute');
const app=express();
const PORT=process.env.PORT || 5000;
const cors=require('cors');
dotEnv.config();
app.use(bodyparer.json());
app.use(cors());
mongoose.connect(process.env.URL)
.then(()=>{
    console.log("Mongodb Connected");
})
.catch((error)=>{
    console.log(`${error}`);
})

app.use('/register',registerroute)
app.use('/app',loginroute);
app.use('/new',postroute);
app.listen(PORT,()=>{

    console.log(`server Running At ${PORT}`);
})





