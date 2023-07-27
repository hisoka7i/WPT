const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set("views","./view");
app.set("view engine","hbs");

app.use('/',(req,res)=>{
  res.render('login');
});

app.post('/welcome',(request,response)=>{
  let x = request.body.user_email;
  console.log(x);
  response.render('welcome');
});

app.listen(1001,()=>{
  console.log("I am listening");
})
