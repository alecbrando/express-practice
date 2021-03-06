const express = require('express');
const app = express();
const routes = require('./routes');
app.set('view engine', 'pug');

app.get('/', (req,res)=>{
    res.send('Hello from Express!');
});

app.get('/*xyz', (req,res)=>{
    res.send('That\'s all I wrote.');

});

app.get('/capital-letters/:letters', (req,res)=>{
    res.send(req.params.letters.toUpperCase());
});

app.use('/margot', routes);
app.use('/margeaux', routes);


app.all(/^\/[A-Za-z0-9\-_]*$/, (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(req.method);
    console.log(req.path);
    res.render('layout',
      { method: req.method, path: req.path, randomNumber });
  });
let port = 8081;

app.listen(port, () => console.log(`listening on port ${port}`));




