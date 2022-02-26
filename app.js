const bodyParser = require("body-parser");
const express = require("express");  //importing exress
const app = express();  //create an app named express
const port = process.env.PORT || 80;  //port number set at 80
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
// import ('./login');
// require("./src/db/connect");
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/contactDance');
}

//defining schema
//
//contact us
const contactSchema = new mongoose.Schema({
    Name: String,
    Phone: Number,
    Email: String,
    Address: String
  });
// converting into model
const Contact = mongoose.model('Contact', contactSchema);



const path = require("path");
const { stringify } = require("querystring");


//****EXPRESS SPECIFICSTUFF****
app.use('/static', express.static('static')) // for serving static files
app.use(express.urlencoded()) // middleware used to access form data to express

//****PUG SPECIFIC STUFF****
// app.set('view engine', 'html') //set the template engine as pug 
app.set('views', path.join(__dirname, 'views')) //set the views directory

//****START THE SERVER****
app.listen(port, ()=>{
    console.log(`This app has started successfully at port: ${port}`);
})

//****END POINTS****
app.get('/', (req,res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/about', (req,res)=>{
    const params = {}
    res.status(200).render('about.pug', params);
})

app.get('/login', (req,res)=>{
    const params = {}
    res.status(200).render('login.pug', params);
})

app.get('/contact', (req,res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.post('/contact', (req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.end("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).end("This item WAS NOT saved to the database")
    });
    // res.status(200).render('contact.pug');
})

// const static_path = path.join(__dirname);
// app.use(express.static(static_path));


// **********************************************************************************************************
// login().catch(err => console.log(err));

// //login
// const loginSchema = new mongoose.Schema({
//     Username: String,
//     Password: String
// });
// //converting into model 
// const Login = mongoose.model('login', loginSchema);

// async function login() {
//     // await mongoose.connect('mongodb://localhost/contactDance.logins');
//   }
// var conn = mongoose.createConnection('mongodb://localhost/contactDance.logins');
// const ModelB=conn.model( new mongoose.Schema({
//     Username: String,
//     Password: String
// }));

//   app.post('/login', (req,res)=>{
//     var myData = new Login(req.body);
//     myData.save().then(()=>{
//         res.end("This item has been saved to the database")
//     }).catch(()=>{
//         res.status(400).end("This item WAS NOT saved to the database")
//     });
//     // res.status(200).render('contact.pug');
// })


//payment
const PUBLISHABLE_KEY= "pk_test_51KXQLbSA9QceOkPHUu7m62AIb4SdyrAHeouLzUlSfHcmpfN6VixBWEO4wT4jz3xkniu5GMJMXJ8ZqJbI9cIzFH4K00auIqr5g3";
const SECRET_KEY= "pk_test_51KXQLbSA9QceOkPHUu7m62AIb4SdyrAHeouLzUlSfHcmpfN6VixBWEO4wT4jz3xkniu5GMJMXJ8ZqJbI9cIzFH4K00auIqr5g3"; 
app.set("view engine", "pug");

app.get('/pay', (req,res)=>{
    const params = {}
    res.status(200).render('pay', {
        key: PUBLISHABLE_KEY
    });
})