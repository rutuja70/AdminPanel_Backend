const mongoose = require('mongoose');

const JobProfileSchema =  new mongoose.Schema({

    name: String,
    mobile: String,
    address:String,
    email:String,
    tenthPercentage:String,
    twelfthPercentage:String,
    graduationGrade:String,
    postGraduationGrade:String,
    experience:String,
    jobProfile:String

})

module.exports= mongoose.model("jobProfile" ,JobProfileSchema)