const path = require('path');

const
  express = require('express'),
  bodyParser = require('body-parser');
const session = require('express-session');


const app = express();

app.use(session({
  secret: 'asdasdasdasdasdasdzxczxczxcasdasdzxczxcasdasdzxczxc',
  resave: false,
  saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const mainRoute = require('./routes/main');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoute);


app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', isLoggedIn: false });
});

app.listen(3000);
