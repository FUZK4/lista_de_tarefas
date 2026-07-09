const express = require('express');
const path = require('path');
const buttons = require('./buttons.js');

const PORT = 3000;

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, '/views'));

var tarefas = ["limpar","estudar", "dormir"];

const buttonHandler = new buttons(app, tarefas);
buttonHandler.init();

app.get('/', (req, res) => {
    res.render('index', { tarefas: tarefas });
});

const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
