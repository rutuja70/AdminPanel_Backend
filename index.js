const express=require('express')
const mongoose=require('mongoose')
const cors =require('cors')

const ContactModel=require('./models/Contacts')
const DepositModel = require('./models/Deposit')
const LoanModel = require('./models/Loan')
const JobProfileModel = require('./models/JobProfile')
// const JobProfile = require('./models/JobProfile')
require('dotenv').config()
const app=express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT ;
mongoose.connect(process.env.MONGO_URL)

app.get('/getContacts',(req,res)=>{
    ContactModel.find()
    .then(contacts=>res.json(contacts))
    .catch(err=>res.json(err))
})

app.get('/getDeposits',(req,res)=>{
    DepositModel.find()
    .then(deposits=>res.json(deposits))
    .catch(err=>res.json(err))
})

app.get('/getLoans',(req,res)=>{
    LoanModel.find()
    .then(loans=>res.json(loans))
    .catch(err=>res.json(err))
})

app.get('/getJobProfile',(req,res)=>{
    JobProfileModel.find()
    .then(jobProfile=>res.json(jobProfile))
    .catch(err=>res.json(err))
})



//delete loan
app.delete('/deleteLoan/:loanId', async (req, res) => {
    const loanId = req.params.loanId;
  
    try {
      await LoanModel.findByIdAndDelete(loanId); // Use findByIdAndDelete for deletion by ID
      res.json({ message: 'Loan deleted successfully' }); // Send a success message
    } catch (err) {
      console.error('Error deleting loan:', err);
      res.status(500).json({ message: 'Error deleting loan' }); // Send an error message with status code 500
    }
  });


  //delete contact
app.delete('/deleteContact/:contactId', async (req, res) => {
    const contactId = req.params.contactId;
  
    try {
      await ContactModel.findByIdAndDelete(contactId); // Use findByIdAndDelete for deletion by ID
      res.json({ message: 'Contact deleted successfully' }); // Send a success message
    } catch (err) {
      console.error('Error deleting Contact:', err);
      res.status(500).json({ message: 'Error deleting contact' }); // Send an error message with status code 500
    }
  });


  //delete deposit
  app.delete('/deleteDeposit/:depositId', async (req, res) => {
    const depositId = req.params.depositId;
  
    try {
      await DepositModel.findByIdAndDelete(depositId); // Use findByIdAndDelete for deletion by ID
      res.json({ message: 'Loan deleted successfully' }); // Send a success message
    } catch (err) {
      console.error('Error deleting loan:', err);
      res.status(500).json({ message: 'Error deleting loan' }); // Send an error message with status code 500
    }
  });


   //delete jobProfile
   app.delete('/deleteJobProfile/:jobProfileId', async (req, res) => {
    const jobProfileId = req.params.jobProfileId;
  
    try {
      await JobProfileModel.findByIdAndDelete(jobProfileId); // Use findByIdAndDelete for deletion by ID
      res.json({ message: 'Loan deleted successfully' }); // Send a success message
    } catch (err) {
      console.error('Error deleting loan:', err);
      res.status(500).json({ message: 'Error deleting loan' }); // Send an error message with status code 500
    }
  });






app.listen(PORT,()=>{
    console.log("server is running")
})