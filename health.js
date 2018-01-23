let express = require('express'),
app = new express(),
path = require('path');

app.listen(3000);

app.use(express.static('./'));

app.get('/bmi',(req,res)=>{
  res.sendFile(path.normalize(__dirname+'/BMI.html'));
})

app.get('/stress',(req,res)=>{
  res.sendFile(path.normalize(__dirname+'/stress.html'));
})
