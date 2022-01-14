const express = require("express");  //importing exress
const app = express();  //create an app named express
const port = 80;  //port number set at 80
const path = require("path");


//****EXPRESS SPECIFICSTUFF****
app.use('/static', express.static('static')) // for serving static files
app.use(express.urlencoded()) // middleware used to access form data to express

//****PUG SPECIFIC STUFF****
app.set('view engine', 'pug') //set the template engine as pug 
app.set('views', path.join(__dirname, 'views')) //set the views directory

//****START THE SERVER****
app.listen(port, ()=>{
    console.log("This app has started successfully!");
})

//****END POINTS****
app.get('/', (req,res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req,res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})
