var express = require('express');
var app = express();

app.use('/res', express.static('res'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'res' });
});

app.listen(8080);