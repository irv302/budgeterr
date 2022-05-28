const express = require('express')
const app = express()
const budget = require('./models/budget')
const bodyParser = require('body-parser')
// const methodOverride = require('method-override')


app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

// app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/budgets', (req, res) => {
    res.render('index.ejs', {
        budgetAll: budget });
});


app.get('/budgets/new', (req, res) => {
    res.render('new.ejs');
});


app.post('/budgets', (req, res) => {
    budget.push(req.body);
    res.redirect('/budgets');
    
});


app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', {budgetAll: budget[req.params.index]});
});



app.listen(3000, () => {
    console.log('I am listening to, 3000');
});

