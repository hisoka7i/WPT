const express=require('express');
const path=require('path');
const url=require('url');
const hbs = require('hbs')
const app = express();
const bodyParser = require('body-parser');
const {resolve} = require('path');

const absolutePath = resolve('');

app.use(express.static(absolutePath+'/views'))
app.use(bodyParser.urlencoded({extended:true}));

app.set('views','./views')
app.set('view engine', 'hbs')

app.use('/', (req,res)=>{
  if(req.body.amount_number>0){
    let z = req.body.amount_number;
    let gst = z*0.18 + z*0.18;
    res.render("login",{gst_amount: gst});
  }
  else if(req.body.user_email>0){
    let x = req.body.user_email;
    res.render("welcome", {username: x});
  }
  else{
    res.render("login");
  }
})


app.listen(3000, (req,res)=>{
  console.log("Local server live");
})
