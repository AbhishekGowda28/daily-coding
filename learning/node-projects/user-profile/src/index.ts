import bodyParser from "body-parser";
import express from "express";
import { getRecords, insertRecord } from "./controller";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

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

app.post("/create", (request, response) => {
    // const properties = ["firstName", "lastName", "age", "gender", "email"];
    const record = request.body;
    // const bodyKeys = Object.keys(record);
    insertRecord(record).then((result) => {
        if (result) {
            response.status(200).send(true);
        } else {
            response.send(true);
        }
    });
});

app.listen(PORT, () => {
    console.log("Server started");
});
