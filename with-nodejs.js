const http = require("http");//this is contain the http package which include in server.js file
const port = 8081;//local port number where your server  display
// http package help to create http server

const toDoList = ["Complete Node Byte", "play Cricket "];


// inside http package http.createServer function present
http
    .createServer((request, respose) => {
        const { method, url } = request; //we are destructure the request and taking method and url (method tells which type of method it is and url tells which route u maade thata request    )
        if (url === "/todos") {
            if (method === "GET") {
                respose.writeHead(200, { "Content-Type": "text/html" });
                respose.write(toDoList.toString());
            }
            else if (method === "POST") {
                let body = "";
                // .on means when it is a post request then do so and so
                request.on('error', (err) => {
                    console.error(err)


                }).on('data', (chunk) => {
                    body += chunk;//body=body+chunk(chunks is bits of data travel through out the internet)
                    console.log(chunk)

                }).on('end', () => {
                    body = JSON.parse(body);//convert it into json format on the server
                    // console.log("data:", body)//we are here jusst console the data not storing the data
                    let newToDo = toDoList;//craete copy of the existing array (toDoList)
                    newToDo.push(body.item);//and pushing the data her
                    console.log(newToDo);
                    respose.writeHead(201);
                })


            }
            else if (method === "DELETE") {
                let body = '';
                request.on('error', (err) => {
                    console.error(err)
                })
                    .on('data', (chunk) => {
                        body += chunk;
                    })
                    .on('end', () => {
                        body = JSON.parse(body);
                        let deleteThis = body.item;
                        // for (let i = 0; i < toDoList.length; i++) {
                        //     if (toDoList[i] === deleteThis) {
                        //         toDoList.splice(i, 1);
                        //         break;
                        //     }
                        // }
                        toDoList.find((element, index) => {
                            if (element === deleteThis) {
                                toDoList.splice(index, 1);
                            }
                        });
                        respose.writeHead(204);
                    })
            }
            else {
                respose.writeHead(501)
            }

        }
        else {
            respose.writeHead(404)
        }
        respose.end();

    })
    .listen(port, () => {
        console.log(`Nodejs server started on port ${port}`);
    })


// http://localhost:8081