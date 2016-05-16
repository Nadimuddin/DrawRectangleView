var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000,
    compression = require('compression'),
    helmet = require('helmet'),
    db = require('./app/model/db'),
    logger = require('./app/helper/logger');

//configure 
app.use(bodyParser());
app.use(compression());
app.use(helmet());

app.use(require('./app/controllers'));


db.connect(function() {
    //callback when connect success
    http.createServer(app).listen(port);
    console.log('server connecting on port '+ port)
});

db.get().connection.on('connected', function() {
    logger.info('Mongoose connected on port ' + port);
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    db.get().connection.close(function() {
        logger.info('Mongoose connection disconnected through app termination');
        process.exit(0);
    });
});