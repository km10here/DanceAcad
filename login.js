// importScripts(app.js);
const express = require("express");  //importing exress
const app = express();  //create an app named express
const port = process.env.PORT || 80;  //port number set at 80
const mongoose = require('mongoose');
login().catch(err => console.log(err));

//login
const loginSchema =conn.model( new mongoose.Schema({
    Username: String,
    Password: String
}));
//converting into model 
const Login = mongoose.model('login', loginSchema);

async function login() {
    await mongoose.connect('mongodb://localhost/contactDance.logins');
    var conn = mongoose.createConnection('mongodb://localhost/contactDance.logins')
  }

  app.post('/login', (req,res)=>{
    var myData = new Login(req.body);
    myData.save().then(()=>{
        res.end("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).end("This item WAS NOT saved to the database")
    });
    // res.status(200).render('contact.pug');
})