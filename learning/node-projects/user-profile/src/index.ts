import express from "express";
import { getRecords } from "./controller";

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
    response.send(`App Powered by Express ${request.path}`);
});

app.get("/user", (request, response) => {
    getRecords({ name: /.*/ }).then((data) => {
        response.status(200).json({
            data: data
        });
    });
});

app.listen(PORT, () => {
    console.log("Server started");
});
