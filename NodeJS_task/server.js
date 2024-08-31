require('dotenv').config();

const express=require('express');
const mongoose=require('mongoose');

const app=express();

const PORT=process.env.PORT;

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to MongoDB")
})



app.use(express.json());

const userRouter=require("./routes/user")



app.listen(PORT,()=>{
    console.log(`Server is running on the ${PORT}`)
})

app.get('/',(req,res)=>{
    console.log("hello world");
    res.send("Hello world")
})

app.use('/',userRouter);