const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 3000;
const budget = require('./modles/budget');
const bodyParser = require('body-parser');

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.get('/budgets', (req, res) => {
    res.render('index.ejs', {budgetAll:budget})
})
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')
})
app.get('/budgets', (req, res) => {
    budget.push(req.body);
    console.log(req.body)
    res.redirect('/budgets')
    
})
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', {budgetAll:budget [req.params.index]})
})

app.listen(port, () => {
    console.log('I am listening to, 3000')
})

