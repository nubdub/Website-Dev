var express = require('express');
var app = express();

app.use(express.static('public'));

var car = {color: 'red"n"blue', door: 4, sunroof: true, price: 30000};
var tweets = [
    {value: "Hello", senti: 0.2},
    {value: "Hello2", senti: 0.3},
    {value: "Hello3", senti: 0.4},
    {value: "Hello4", senti: 0.5},
    {value: "Hello3", senti: 0.4},
    {value: "Hello4", senti: 0.5},
    {value: "Hello3", senti: 0.4},
    {value: "Hello4", senti: 0.5},
    {value: "Hello5", senti: 0.6}
]

app.get('/api', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify({data: 'Hello World'}));
    res.send(car);
});

app.get('/api/tweets', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify({data: 'Hello World'}));
    res.send(tweets);
});

console.log('Listening on port 8080');

app.listen(8080);