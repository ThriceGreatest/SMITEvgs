/*
 * @oregonstate.edu email address below, so we know whose code we're grading.
 * name: Devin Martin
 * email: martidev@orgeonstate.edu
 */

var http = require("http");
var fs = require("fs");


var errorContent = fs.readFileSync('./404.html');
var indexHTML = fs.readFileSync('./index.html');
var ymirHTML = fs.readFileSync('./ymirVGS.html');
var jsContent = fs.readFileSync('./index.js');
var cssContent = fs.readFileSync('./style.css');


var PORT = process.env.PORT
if (PORT == undefined){
    PORT = 3000
}

var server = http.createServer(function (req, res) {
  console.log("A request was received")
  console.log("  - req.method:", req.method)
  console.log("  - req.url:", req.url)

  if ((req.url == '/index.html') || (req.url == '/')) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(indexHTML);
  } else if (req.url == '/ymirVGS.html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(ymirHTML);
  } else if (req.url == '/style.css') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    res.write(cssContent);
  } else if (req.url == '/index.js') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/javascript');
    res.write(jsContent);
  } else if (req.url.startsWith('/voice/')) {
    // Get the file name from the request URL
    const fileName = req.url.substring(7);

    // Read the file contents
    const fileContents = fs.readFileSync(`./voice/${fileName}`);

    // Set the content type and status code
    res.setHeader('Content-Type', 'audio/ogg');
    res.statusCode = 200;

    // Send the file contents to the client
    res.write(fileContents);
  } 
  else if (req.url.startsWith('/image/')) {
    // Get the file name from the request URL
    const fileName = req.url.substring(7);

    // Read the file contents
    const fileContents = fs.readFileSync(`./image/${fileName}`);

    // Set the content type and status code
    res.setHeader('Content-Type', 'image/png');
    res.statusCode = 200;

    // Send the file contents to the client
    res.write(fileContents);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write(errorContent);
  }

  res.end();
});


server.listen(PORT, function(error) {
    if (error){
        console.log('Error:' + error)
    } else {
        console.log('Server is listening on port ' + PORT)
    }
});