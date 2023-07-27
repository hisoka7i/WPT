import express from "express"
import hbs from "hbs"
import path,{resolve} from "path"


const app=express();

const absolutePath = resolve('');
app.use(express.static(absolutePath+'/view'));

app.use(express.json());
app.set("views","./view");
app.set("view engine","hbs");

app.get("/", (req,res)=>{
  res.render("home");
});

app.get("/message",(req,res)=>{
  res.send({message:"Hii from Server", sender:"Not me"})
})

app.listen(3000,()=>{
  console.log("I am listening on port 3000");
});
