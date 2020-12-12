let mango = require("mongodb");
const mongoClient = mango.MongoClient;

const MONGO_URL: string = "mongodb://localhost:27017/";
let DATABASE: string = "userprofile";
const collections: string[] = ["customers"];

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

getRecords({ address: /^H/ });
