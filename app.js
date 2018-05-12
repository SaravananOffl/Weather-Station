const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{

    res.redirect('/search');
});

app.get('/search',(req,res)=>{


    res.render('index');
});

app.post('/search',(req,res)=>{

    console.log(req.body);
    res.render('search_results',{cityname: req.body.ctyname});

});









app.listen('3000', ()=>console.log('Server is running'));
