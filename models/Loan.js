const mongoose = require('mongoose');

const LoanSchema =  new mongoose.Schema({

    name: String,
    mobile: String,
    email:String,
    address:String,
    loanType:String

})

module.exports= mongoose.model("loan" ,LoanSchema)