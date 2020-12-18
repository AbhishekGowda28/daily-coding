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

app.route("/user").
    get((request, response) => {
        getRecords(request.query).then((data) => {
            response.status(200).json({
                data: data
            });
        });
    }).post((request, response) => {
        insertRecord({ ...request.body }).then((result) => {
            if (result) {
                response.status(200).send(true);
            } else {
                response.send(true);
            }
        });
    }).
    put((request, response) => {
        const record = Object.assign({}, request.body);
        const id = request.body._id;
        delete record._id;
        updateRecords({ _id: id }, record).then((result) => {
            if (result) {
                response.status(200).send(true);
            } else {
                response.send(false);
            }
        });
    }).
    delete((request, response) => {
        const id = request.body._id;
        deleteRecords({ _id: id }).then((result) => {
            if (result) {
                response.status(200).send(true);
            } else {
                response.send(false);
            }
        });
    });

app.listen(PORT, () => {
    console.log("Server started");
});
