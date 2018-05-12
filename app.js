const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{

    res.redirect('/search');
});

app.get('/search',(req,res)=>{

    res.send("Hi there");
});










app.listen('3000', ()=>console.log('Server is running'));
