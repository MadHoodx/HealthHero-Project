const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Test")
.then(() =>{
    console.log("mongodb connected");   
}) 
.catch(() => {
    console.log('failed');
})


const newSchema = new mongoose.Schema({
    email:{
        type : String,
        required : true,
        unique: true
    },
    password:{
        type : String,
        required : true
    }
   
})

const collection = mongoose.model("register",newSchema)

module.exports = collection