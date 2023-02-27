const http = require('http');
const express = require('express');
const hostname = 'localhost';
const path = require('path');
const port = 3000;
const app = express();
var bodyParser = require('body-parser');
const ejs = require('ejs');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/',(requeste,response)=>{
response.render("home")
});

app.get('/servicos',(requeste,response)=>{
    response.render("servicos")
});

app.get('/maquinas',(requeste,response)=>{
    response.render("maquinas")
});

app.get("/localizacao",(requeste,response)=>{
    response.render("localizacao")

})

app.listen(port,()=>{
    console.log('Conectado');
});
