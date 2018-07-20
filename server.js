const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8050;

app.use(express.static(path.join(__dirname, 'dist')));

app.get(/^\/(api|rest)\/.+$/,function(request,response){

var fullUrl = request.protocol + '://' + request.get('host') + request.originalUrl;
   var arr3 = [ 'cat', 'rat', 'bat' ];
   response.type('json');
   response.json(arr3);
});


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.get('/layout',function(request, response){
  response.sendFile(__dirname + '/src/view.xml');
});

app.get('/set',function(request, response){
  response.sendFile(__dirname + '/src/simple.txt');
});


app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
));
