const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(function(req, res, next){
 req.requestTime = new Date().toISOString();
     next();
});

app.get('/',  (req,  res)=>{
    res.render('home.ejs')
    console.log(req.requestTime);
});
app.get('/service',  (req,  res)=>{
    res.render('services.ejs')
});
app.get('/contact',  (req,  res)=>{
    res.render('contact.ejs')
});
app.use((req, res)=>{
    res.render('404.ejs')
})


app.listen(5500, ()=>{
    console.log('Hey listen to request');
})
