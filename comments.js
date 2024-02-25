// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file
// when someone visits the root URL. Use the fs module to read the contents of the comments.html file from disk.

// Use the http module to create the server, and the fs module to read the file from disk.
// Your solution should use the asynchronous versions of these functions.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile('comments.html', function (err, data) {
    res.end(data);
  });
});

server.listen(3000);
// Path: comments.js
// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file
// when someone visits the root URL. Use the fs module to read the contents of the comments.html file from disk.

// Use the http module to create the server, and the fs module to read the file from disk.
// Your solution should use the asynchronous versions of these functions.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile('comments.html', function (err, data) {
    res.end(data);
  });
});

server.listen(3000);
// Path: comments.js
// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file
// when someone visits the root URL. Use the fs module to read the contents of the comments.html file from disk.

// Use the http module to create the server, and the fs module to read the file from disk.
// Your solution should use the asynchronous versions of these functions.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile('comments.html', function (err, data) {
    res.end(data);
  });
});

server.listen(3000);
// Path: comments.js
// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file
// when someone visits the root URL. Use the fs module to read the contents of the comments.html file from disk.

// Use the http module to create the server, and the fs module to read the file from disk.
// Your solution should use the asynchronous versions of these functions.