const express = require('express')
const app = express();
const axios = require('axios');

const user ={
  name: 'Houjifa Hasan', 
  age: 26, 
  city: 'Dhaka'
}

app.get('/home', function (req, res){

  res.send('Hello World!'); 
});

app.get('/user', function (req, res){

  const url = 'http://localhost:3000/student/1234';
 axios.get(url)
 .then(response =>{
  console.log("Response: ",response.data);
  
 })
  .catch(error =>{
    console.log("Error fatching data: ", error.message);
});
res.send("ok");
});

app.listen(4000) 