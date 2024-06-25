const mongoose = require('mongoose');

const DepositeScheme =  new mongoose.Schema({

    name: String,
    mobile: String,
    email:String,
    address:String,
    accountType:String

})

module.exports= mongoose.model("deposit" ,DepositeScheme)