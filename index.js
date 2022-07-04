const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");

//passport config:
require('./config/passport')(passport)
//mongoose
mongoose.connect('mongodb+srv://IntMine:2PXEB5QsoPWh8wqD@intmine.ykzbg.mongodb.net/myIntMineBase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));


// Setting up the public directory
app.use('/public', express.static('public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));
//express session
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
    })
    
//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));



//------------ Dashboard in Route ------------//
// Home route
app.get('/dashboard/home', (req, res) => res.render('dashboard/home.html'));
// Fund route
app.get('/dashboard/fund', (req, res) => res.render('dashboard/fund.html'));
// Withdraw route
app.get('/dashboard/withdraw', (req, res) => res.render('dashboard/withdraw.html'));
// Profit route
app.get('/dashboard/profit', (req, res) => res.render('dashboard/profit.html'));
// Plan route
app.get('/dashboard/plan', (req, res) => res.render('dashboard/plan.html'));
// History route
app.get('/dashboard/history', (req, res) => res.render('dashboard/history.html'));
// Settings route
app.get('/dashboard/setting', (req, res) => res.render('dashboard/setting.html'));
// Refer route
app.get('/dashboard/refer', (req, res) => res.render('dashboard/refer.html'));
// Support route
app.get('/dashboard/support', (req, res) => res.render('dashboard/support.html'));
// Exit route
app.get('/dashboard/exit', (req, res) => res.render('dashboard/exit.html'));

// Fund route
app.get('/dashboard/fund/bitcoin', (req, res) => res.render('dashboard/fundPages/btc.html'));
app.get('/dashboard/fund/bitcoin-cash', (req, res) => res.render('dashboard/fundPages/bch.html'));
app.get('/dashboard/fund/ethereum', (req, res) => res.render('dashboard/fundPages/eth.html'));
app.get('/dashboard/fund/litecoin', (req, res) => res.render('dashboard/fundPages/ltc.html'));

// Withdraw route
app.get('/dashboard/withdraw/bank', (req, res) => res.render('dashboard/withdrawPages/bank.html'));
app.get('/dashboard/withdraw/bitcoin', (req, res) => res.render('dashboard/withdrawPages/btc.html'));
app.get('/dashboard/withdraw/bitcoin-cash', (req, res) => res.render('dashboard/withdrawPages/bch.html'));
app.get('/dashboard/withdraw/litecoin', (req, res) => res.render('dashboard/withdrawPages/ltc.html'));
app.get('/dashboard/withdraw/ethereum', (req, res) => res.render('dashboard/withdrawPages/eth.html'));
app.get('/dashboard/withdraw/stripe', (req, res) => res.render('dashboard/withdrawPages/stripe.html'));



const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));