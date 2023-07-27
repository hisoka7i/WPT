import express from 'express';
const app = express();
app.use(express.json());

// app.get('/:fact',(req,res)=>{
//   let x = req.params.fact;
//   let fac = 1;
//   for (let j=1; j<=x; j++){
//     fac = fac*j;
//   }
//   res.send(`<h1>The factorial of the number is: ${fac}</h1>`)
// });

app.get('/should_we_throw/:name/:date', (req,res)=>{
  let pname = req.params.name;
  let date = req.params.date;
  let d = new Date(date);
  let today = new Date();
  console.log(pname,date)
  if(today>d){
    res.send(`<h1>Expired</h1>`)
  }
  else{
    res.send(`<h1>Ok to use</h1>`)
  }
});

app.get('/product',(req,res)=>{
  let val = req.query.val
  console.log(val)
  res.send(val)
})

app.get('/emp',(req,res)=>{
  let val = req.body.val
  console.log(val)
  res.send(`<h1>${val}</h1>`)
})

app.listen(3000, ()=>{
  console.log("listening...")
});
