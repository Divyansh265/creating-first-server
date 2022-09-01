const http = require("http");//this is contain the http package which include in server.js file
const port = 8081;//local port number where your server  display
// http package help to create http server

const toDoList = ["Complete Node Byte", "play Cricket "];


// inside http package http.createServer function present
http.createServer((request, respose) => {
    respose.writeHead(200, { 'Content-Type': 'text/html' });
    respose.write("<h1>Hello, this is  my server</h1>")
    respose.end();
}).listen(port, () => {
    console.log(`Nodejs server started on port ${port}`);
})


// http://localhost:8081