const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const request = require('request');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine','ejs');


const apiKey ='e931741e1fe41345b9a1b21ed77cac63';

app.get('/',(req,res)=>{

    res.redirect('/search');
});

app.get('/search',(req,res)=>{


    res.render('index');
});

app.post('/search',(req,res)=>{

    console.log(req.body);
    let city = req.body.cityname;
    url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    request(url,(err,response,body)=>{
        const weather = JSON.parse(body);
        if(err || weather.cod ==='404') {
            res.send('404 Error');
        }
        else {
            console.log("NO ");
            res.render('search_results',{cityname: req.body.cityname, weather: weather});

        }

    });





});









app.listen('3000', ()=>console.log('Server is running'));
