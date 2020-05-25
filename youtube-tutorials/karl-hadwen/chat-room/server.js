const express = require("express");
const WebSocket = require("ws");
const http = require("http");

const PORT = 8800;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws, req) {

    const IP_Address = req.socket.rawListeners;

    ws.on("message", function message(data) {
        wss.clients.forEach(function eachClients(client, index) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});

server.listen(PORT, function serverStarted() {
    console.log("Server started in port", PORT);
});