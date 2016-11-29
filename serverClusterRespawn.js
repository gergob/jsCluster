let cluster = require('cluster');

if (cluster.isMaster) {
    let cpus = require('os').cpus().length;
    for (let i = 0; i < cpus; i += 1) {
        cluster.fork();
    }
    cluster.on('exit', function (worker) {
        console.log(`worker ${worker.id} exited, respawning...`);
        cluster.fork();
    });    
} else {
    let express = require('express'),
        app = express(),
        port = 3000,
        counter = 10000 + Math.round(Math.random() * 10000);
    app.get('/', function (req, res) {
        res.send('Hello World!');
        if (counter-- === 0) {
            //console.log(`worker ${cluster.worker.id} is exiting...`);        
            cluster.worker.disconnect();
        }        
    });
    app.listen(port);
    console.log(`worker ${cluster.worker.id} is listening on port ${port}...`);
}

