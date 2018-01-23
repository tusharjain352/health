let express = require('express'),
app = new express(),
path = require('path');



app.use(express.static('./'));

app.get('/',function(req,res){
    console.log("request get /---------------");

    res.end("Please use /bmi url for bmi calc &  use /stress url for stress calc");
})

app.get('/bmi',(req,res)=>{
  res.sendFile(path.normalize(__dirname+'/BMI.html'));
})

app.get('/stress',(req,res)=>{
  res.sendFile(path.normalize(__dirname+'/stress.html'));
});

app.listen(3000,()=>{
console.log("server started @ 3000");
});
