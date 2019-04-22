/*
    This is a mongo DB server
*/

/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');

// Config
const config = require('./src/app/core/dbase/server/config');

/*
 |--------------------------------------
 | MongoDB
 |--------------------------------------
 */

mongoose.connect(config.MONGO_URI);
const monDb = mongoose.connection;

monDb.on('error', function() {
    console.log('MongoDB Connection Error. Please make sure that', config.MONGO_URI, 'is running.');
});

monDb.once('open', function callback() {
    console.info('Connected to MongoDB:', config.MONGO_URI);
});

/*
 |--------------------------------------
 | Application info here
 |--------------------------------------
 */

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cors());

// Set port
const port = process.env.PORT || '8083';
app.set('port', port);

// Set static path to Angular app in dist
// Don't run in dev
// TODO Remove this!!!!
if (process.env.NODE_ENV !== 'dev') {
    app.use('/', express.static(path.join(__dirname, './dist')));
}

/*
 |--------------------------------------
 | Routes
 |--------------------------------------
 */

 require('./src/app/core/dbase/server/api')(app, config);

 // Pass routing to Angular App
 // DONT RUN IN DEV
 // TODO REMOVE THIS!!!
 if (process.env.NODE_ENV !== 'dev') {
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '/dist/index.html'));
    });
}

/*
 |--------------------------------------
 | Server
 |--------------------------------------
*/

app.listen(port, () => console.log(`Server running on localhost:${port}`));

