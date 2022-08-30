const http = require("http");
const port = 8081;
http.createServer((request, respose) => {
    respose.writeHead(200, { 'Content-Type': 'text/html' });
    respose.write("<h1>Hello, this is from my server</h1>")
    respose.end();
}).listen(port, () => {
    console.log(`Nodejs server started on port ${port}`);
})