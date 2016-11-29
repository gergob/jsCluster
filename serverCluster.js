let cluster = require('cluster');

if (cluster.isMaster) {
    let cpus = require('os').cpus().length;
    for (let i = 0; i < cpus; i += 1) {
        cluster.fork();
    }    
} else {
    let express = require('express'),
        app = express(),
        port = 3000;
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
    app.listen(port);
    console.log(`worker ${cluster.worker.id} is listening on port ${port}...`);
}