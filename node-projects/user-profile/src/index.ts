import mango from "mongodb";
import express from "express";

const app = express();
const mongoClient = mango.MongoClient;

const PORT = 3000;
const MONGO_URL: string = "mongodb://localhost:27017/";
const collections: string[] = ["customers"];
let DATABASE: string = "userprofile";

function createDatabase(databaseName: string) {
    const URL = `${MONGO_URL}/${databaseName}`;
    mongoClient.connect(URL, (error: any, db: { close: () => void; }) => {
        if (error) {
            console.error(error);
            throw error;
        }
        console.log("DB created");
        DATABASE = databaseName;
        db.close();
    });
}

function createCollection(collectionName: string) {
    mongoClient.connect(MONGO_URL, function (err: any, db: { db: (arg0: string) => any; close: () => void; }) {
        if (err) throw err;
        const dbo = db.db(DATABASE);
        dbo.createCollection(collectionName, function (err: any, res: any) {
            if (err) throw err;
            console.log("Collection created!");
            collections.push(collectionName);
            db.close();
        });
    });
}

function insertRecord(record: any) {
    mongoClient.connect(MONGO_URL, function (err: any, db: { db: (arg0: string) => any; close: () => void; }) {
        if (err) throw err;
        const dbo = db.db(DATABASE);
        dbo.collection(collections[0]).insertOne(record, function (err: any, res: any) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}

function insertRecords(records: any) {

    mongoClient.connect(MONGO_URL, function (err: any, db: { db: (arg0: string) => any; close: () => void; }) {
        if (err) throw err;
        const dbo = db.db(DATABASE);
        dbo.collection(collections[0]).insertMany(records, function (err: any, res: { insertedCount: string; }) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });
    });
}

function getRecords(query: any): any[] {
    let data = [];
    mongoClient.connect(MONGO_URL, function (err, db) {
        if (err) throw err;
        let dbo = db.db(DATABASE);

        dbo.collection(collections[0]).find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            data = result;
            db.close();
        });
    });
    return data;
}

function deleteRecords(query: any): any {
    mongoClient.connect(MONGO_URL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(DATABASE);
        dbo.collection(collections[0]).deleteMany(query, function (err, obj) {
            if (err) throw err;
            console.log(obj.result.n + " document(s) deleted");
            db.close();
        });
    });
}

function updateRecords(currentRecord: any, newRecord: any): any {
    mongoClient.connect(MONGO_URL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(DATABASE);

        dbo.collection(collections[0]).updateMany(currentRecord, newRecord, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
    });
}

// const myquery = { address: "Central st 954" };
// const newvalues = { $set: { address: "Central Park 954" } };
// updateRecords(myquery, newvalues);

// deleteRecords({ address: /1$/ });

app.get("/", (request, response) => {
    response.send(`App Powered by Express ${request.path}`);
});

app.listen(PORT, () => {
    console.log("Server started");
});