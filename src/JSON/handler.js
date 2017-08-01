var fs = require('fs');
var contentTypes = {
  html: ' text/html',
  css: 'text/css',
  js: 'application/javascript',
  ico: 'image/x-icon',
};

function handleHome(req,res)
{
  var url = req.url;
    var parts = url.split('.');
    var fileExtension = parts[parts.length - 1];
    fs.readFile(__dirname + '/../public/index.html', function(err, data) {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/html'
        });
        res.end('<h1>Internal Server Error</h1>');

      } else {
        res.writeHead(200, {
          'Content-Type': contentTypes[fileExtension]
        });
        res.end(data);

      }
    });
}

function handleWords(req,res)
{
  var url = req.url;
    var parts = url.split('.');
    var fileExtension = parts[parts.length - 1];
    fs.readFile(__dirname + '../public/books.js', function(err, data) {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/html'
        });
        res.end('<h1>Internal Server Error</h1>');

      } else {
        res.writeHead(200, {
          'Content-Type': contentTypes[fileExtension]
        });
        res.end(data);

      }
    });
}

function handleNotFound(req,res)
{
  res.writeHead(200, {
    'Content-Type': 'text/css'
  });
  res.end('<h1>Not Found</h1>');
}
module.exports = {
  handleHome :handleHome ,
  handleWords :handleWords,
  handleNotFound:handleNotFound
}
