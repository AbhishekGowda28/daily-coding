import bodyParser from "body-parser";
import express from "express";
import { deleteRecords, getRecords, insertRecord, updateRecords } from "./controller";

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
    const id = request.body.id;
    const record = request.body;
    delete record._id;
    insertRecord({ ...record, _id: id }).then((result) => {
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


app.post("/update", (request, response) => {
    const id = request.body.id;
    const record = request.body;
    updateRecords({ _id: id }, record).then(() => {
        response.status(200).send(true);
    });
});

app.post("/delete", (request, response) => {
    const id = request.body.id;
    deleteRecords({ _id: id }).then(() => {
        response.status(200).send(true);
    });
});