const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://root:12345@cluster0.q6rwkj5.mongodb.net/ApnaCar' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose