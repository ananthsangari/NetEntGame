/**
 * Server-side starting point, start server to handle static and API
 * @type {"path"}
 */

var path = require('path'),
    express = require('express'),
    Service = require('./service');

var PORT = process.env.PORT || 3000;

var app = express(),
    server = require('http').createServer(app),
    logicService = new Service();

//static file handling
app.use('/static', express.static(path.join(__dirname, '../../static/dist')));
app.get('/', (req, res) => res.sendFile('/index.html', {root: path.join(__dirname, '../../static/')}) );

//REST APIs
app.get('/api/roll', (req, res) => res.send(logicService.getRoll()) );


server.listen(PORT, _ => console.log(`Server listening at port ${PORT}`));

