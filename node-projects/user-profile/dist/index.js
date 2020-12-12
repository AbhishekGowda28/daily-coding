let mango = require("mongodb");
const mongoClient = mango.MongoClient;
const MONGO_URL = "mongodb://localhost:27017/";
let DATABASE = "userprofile";
const collections = ["customers"];
function createDatabase(databaseName) {
    const URL = `${MONGO_URL}/${databaseName}`;
    mongoClient.connect(URL, (error, db) => {
        if (error) {
            console.error(error);
            throw error;
        }
        console.log("DB created");
        DATABASE = databaseName;
        db.close();
    });
}
function createCollection(collectionName) {
    mongoClient.connect(MONGO_URL, function (err, db) {
        if (err)
            throw err;
        const dbo = db.db(DATABASE);
        dbo.createCollection(collectionName, function (err, res) {
            if (err)
                throw err;
            console.log("Collection created!");
            collections.push(collectionName);
            db.close();
        });
    });
}
function insertRecord(record) {
    mongoClient.connect(MONGO_URL, function (err, db) {
        if (err)
            throw err;
        const dbo = db.db(DATABASE);
        dbo.collection(collections[0]).insertOne(record, function (err, res) {
            if (err)
                throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}
function insertRecords(records) {
    mongoClient.connect(MONGO_URL, function (err, db) {
        if (err)
            throw err;
        const dbo = db.db(DATABASE);
        dbo.collection(collections[0]).insertMany(records, function (err, res) {
            if (err)
                throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });
    });
}
function getRecords(query) {
    let data = [];
    mongoClient.connect(MONGO_URL, function (err, db) {
        if (err)
            throw err;
        let dbo = db.db(DATABASE);
        dbo.collection(collections[0]).find(query).toArray(function (err, result) {
            if (err)
                throw err;
            console.log(result);
            data = result;
            db.close();
        });
    });
    return data;
}
getRecords({ address: /^H/ });
//# sourceMappingURL=index.js.map