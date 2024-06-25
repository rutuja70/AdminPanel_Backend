const mongoose=require('mongoose')

const ContactSchema=new mongoose.Schema({
    name:String,
    mobile:String,
    email:String,
    address:String, 
    type:String
})

module.exports = mongoose.model("contact", ContactSchema)

