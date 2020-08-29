const http = require("http");

const hostName = "localhost";
const port = 5002;

// Arrow functions do not have this associated with anything.
// On console log it would return undefined
// But, if its bind to any object they Arrow function would incorporate the properties

const requestListiner = (props) => {
    console.log("requestListiner -> properties 😁", props);
};

const server = http.createServer(requestListiner);

const listeningListiner = () => {
    console.log("Server Started");
};

server.listen(port, hostName, listeningListiner);