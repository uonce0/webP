const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.status(200).send('<h1>Welcome!!</h1>');
});
app.get('/about',(req,res)=> {
    res.status(200).send('<h2>Here is SYW home.</h2>');
});
app.listen(1000);