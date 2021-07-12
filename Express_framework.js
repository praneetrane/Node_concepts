const express= require('express');

const app= express();

app.get('/',(req, res)=>{
    res.send('Hi whats up from express')
});

app.listen(4000);