let mango = require("mongodb");
const mongoClient = mango.MongoClient;

const MONGO_URL = "mongodb://localhost:27017/";
const DATABASE = "userprofile";
const collections = ["customers"];


// mongoClient.connect(DB_URL, (error, db) => {
//     if(error){
//         console.error(error);
//         throw error;
//     }
//     console.log("DB created");
//     db.close();
// });

// mongoClient.connect(MONGO_URL, function (err, db) {
//     if (err) throw err;
//     const dbo = db.db("userprofile");
//     dbo.createCollection("customers", function (err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// }); 

// mongoClient.connect(MONGO_URL, function (err, db) {
//     if (err) throw err;
//     const dbo = db.db(DATABASE);
//     const myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection(collections[0]).insertOne(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// }); 

mongoClient.connect(MONGO_URL, function (err, db) {
    if (err) throw err;
    const dbo = db.db(DATABASE);
    const myobj = [
        { name: 'John', address: 'Highway 71' },
        { name: 'Peter', address: 'Lowstreet 4' },
        { name: 'Amy', address: 'Apple st 652' },
        { name: 'Hannah', address: 'Mountain 21' },
        { name: 'Michael', address: 'Valley 345' },
        { name: 'Sandy', address: 'Ocean blvd 2' },
        { name: 'Betty', address: 'Green Grass 1' },
        { name: 'Richard', address: 'Sky st 331' },
        { name: 'Susan', address: 'One way 98' },
        { name: 'Vicky', address: 'Yellow Garden 2' },
        { name: 'Ben', address: 'Park Lane 38' },
        { name: 'William', address: 'Central st 954' },
        { name: 'Chuck', address: 'Main Road 989' },
        { name: 'Viola', address: 'Sideway 1633' }
    ];
    dbo.collection(collections[0]).insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
}); 