const http = require("http");

const hostName = "localhost";
const portNumber = 5002;

// Arrow functions do not have this associated with anything.
// On console log it would return undefined
// But, if its bind to any object they Arrow function would incorporate the properties

const requestListiner = (_, res) => {
    res.writeHead(200, { "content-Type": "text/plain" })
    res.end("ok")
};

const server = http.createServer(requestListiner);

const listeningListiner = () => {
    console.log(`Server Running at http://${hostName}:${portNumber}`);
};

server.listen(portNumber, hostName, listeningListiner);