let express = require('express'),
    app = express(),
    port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port);
console.log(`application is listening on port ${port}...`);