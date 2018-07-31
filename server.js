var app = require('express')();
var bodyParser = require('body-parser');
var index = require('./apicode/routes/index.js');
//var apiroutes = require('./apicode/routes/apiroutes.js'); //in case route needs to be defined separtely

var port = process.env.port || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
console.log('Server Started at Port 3030');
app.use('/', index);
//app.use(apiroutes);

app.listen(port);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

