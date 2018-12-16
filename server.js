const bodyParser = require('body-parser');
const express = require('express');
const models = require('./models');
const expressSession = require('express-session');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressSession(({
	secret: 'SECRETMESSAGE',
	resave: false,
	saveUninitialized: true,
})));

// Load up all of the controllers
const controllers = require('./controllers');
app.use(controllers)

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})


// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.
models.sequelize.sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`)
    });
  });