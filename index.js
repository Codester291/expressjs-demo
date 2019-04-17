/*eslint-disable max-len */
/*eslint-disable no-console */
//Const routes = require('./routes/courses');
const config = require('config'); 
const logger = require('./middleware/logger');
const authi = require('./middleware/auth');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const courses = require('./routes/courses');
const routes = require('./routes/homepage');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

//Express middleware also third party middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', routes);

//My own middleware
app.use(logger);
app.use(authi);


//Config
console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);

if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('Morgan Enabled...');
}
//Debug for db
dbDebugger('Connected to the database');


//PORT in environmental variable
//eslint-disable-next-line no-undef
const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`listening on ${port} port...`));