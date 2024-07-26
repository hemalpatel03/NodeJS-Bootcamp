const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello from express server');
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});