const express = require('express')
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/hello', function (req, res) {
    res.send('Hello everyone')
})
app.get('/world', function (req, res) {
    var world = {
        name:"ram",
        age: 25,
        village: "rajkot"
    }
    res.send(world)
})

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});