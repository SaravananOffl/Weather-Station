const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const request = require('request');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine','ejs');


const apiKey = require('./config').API_KEY;

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
    if(!(city ==='')){
    request(url,(err,response,body)=>{
        const weather = JSON.parse(body);
        if(err || weather.cod ==='404') {
            res.send('404 Error');
        }
        else {
            console.log("NO ");
            res.render('search_results',{cityname: req.body.cityname, weather: weather});

        }

    }
    );}
    else{
        res.send('<div> <h1> No City Name Entered</h1> <a href="/">Go back</a></div> ')
    }

});


app.get('*',(req,res)=>{

    res.render('default_route');
});








app.listen('3000', ()=>console.log('Server is running'));
