import mango, { ObjectID } from "mongodb";

const mongoClient = mango.MongoClient;

const MONGO_URL: string = "mongodb://localhost:27017/";
const collections: string[] = ["customers"];
let DATABASE: string = "userprofile";

export function createDatabase(databaseName: string) {
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

export function createCollection(collectionName: string) {
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

export async function insertRecord(record: any) {
    return new Promise(async (resolve) => {
        mongoClient.connect(MONGO_URL, async function (err: any, db: { db: (arg0: string) => any; close: () => void; }) {
            if (err) {
                resolve(false);
                throw err;
            } else {
                const dbo = db.db(DATABASE);
                await dbo.collection(collections[0]).insertOne(record, function (err: any, res: any) {
                    if (err) {
                        resolve(false);
                        throw err;
                    } else {
                        db.close();
                        resolve(true);
                    }
                });
            }
        });
    });
}

export function insertRecords(records: any) {

    mongoClient.connect(MONGO_URL, function (err: any, db: { db: (arg0: string) => any; close: () => void; }) {
        if (err) throw err;
        const dbo = db.db(DATABASE);
        dbo.collection(collections[0]).insertMany(records, function (err: any, res: { insertedCount: string; }) {
            if (err) throw err;
            db.close();
        });
    });
}

export async function getRecords(query: any): Promise<any> {
    let data = [];

    return new Promise(async (resolve) => {
        mongoClient.connect(MONGO_URL, async function (err, db) {
            if (err) throw err;
            await db.db(DATABASE).collection(collections[0]).find(query).toArray(function (err, result) {
                if (err) throw err;
                db.close();
                data = result;
                resolve(data);
            });
        });
    });
}

export async function deleteRecords(query: any): Promise<any> {
    return new Promise((resolve) => {
        mongoClient.connect(MONGO_URL, async function (err, db) {
            if (err) {
                resolve(false);
                throw err;
            }
            const dbo = db.db(DATABASE);
            await dbo.collection(collections[0]).deleteOne(query, function (err, obj) {
                if (err) {
                    resolve(false);
                    throw err;
                } else {
                    db.close();
                    resolve(true);
                }
            });
        })
    });
}

export async function updateRecords(currentRecord: any, newRecord: any): Promise<any> {
    return new Promise((resolve) => {
        mongoClient.connect(MONGO_URL, async function (err, db) {
            if (err) {
                resolve(false);
                throw err;
            }
            const dbo = db.db(DATABASE);
            await dbo.collection(collections[0]).updateOne(currentRecord, { $set: { ...newRecord } }, { upsert: true }, function (err, res) {
                if (err) {
                    resolve(false);
                    throw err;
                } else {
                    db.close();
                    resolve(true);
                }
            });
        });
    });
}
