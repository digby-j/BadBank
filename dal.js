const { rejects } = require('assert');

const MongoClient   = require('mongodb').MongoClient;
// const url           = 'mongodb://localhost:27017';
// let db              = null;

// // connect mongodb
// MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client){
//     console.log("Connected successfully to db server");
//     console.log(err);

//     // connect to myproject database
//     db = client.db('myproject');
// });



// Ensure you have run 'npm install mongodb'
var MongoClient = require('mongodb').MongoClient;

var username = `${process.env.DB_NAME}`;
var password = `${process.env.DB_PASS}`;
var hosts = `${process.env.DB_HOST}`;
var database = `${process.env.DB_DATABASE}`;
var options = `${process.env.DB_OPTIONS}`;
var connectionString = 'mongodb://' + username + ':' + password + '@' + hosts + '/' + database + options;

MongoClient.connect(connectionString, function(err, db) {
    if (db) {
        db.close();
    }
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Connected!');
        process.exit();
    }
});



// create user account
function create(name, email, password){
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
}

function find(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({email: email})
            .toArray(function (err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })

}

// update - deposit/withdraw amount
function update(email, amount) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdate(
                { email: email },
                { $inc: { balance: amount } },
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );


    });
}

function findOne(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOne({ email: email })
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
    })
}


 // all users
 function all(){
     return new Promise((resolve, reject) => {
         const customers = db
         .collection('users')
         .find({})
         .toArray(function(err, docs) {
             err ? reject(err) : resolve(docs);
         });
         
     })
 }

 module.exports = {create, findOne, find, update, all};