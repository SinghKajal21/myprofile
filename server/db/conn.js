const mongoose = require("mongoose");


const DB ="mongodb+srv://Kajal:Kajal1234@cluster0.igjfywt.mongodb.net/profile?retryWrites=true&w=majority";
// const DB = process.env.DATABASE


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));