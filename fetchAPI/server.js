import express from "express";
import bodyParser from "body-parser";
import http from "http";

const app = express();
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', (req,res)=>{
  const url = "http://api.nbp.pl/api/cenyzlota/last/30/?format=json"

  http.get(url, function(response){
    console.log("hi");
    console.log(response);
  })
  res.send("Server is running");
});

app.listen(3000, (req,res)=>{
  console.log("Hi there!!!")
})
