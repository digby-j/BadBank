// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';

// MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
//     console.log('Connected!');

//     // database name
//     const dbName = 'myproject';
//     const db = client.db(dbName);

//     // new user
//     var name = 'user' + Math.floor(Math.random()*10000);
//     var email = name + '@jakedigby.com';

//     // Insert into customer table
//     var collection = db.collection('customers');
//     var doc = {name, email};
//     collection.insertOne(doc, {w:1}, function(err, result) {
//         console.log('Document Inserted');
//     });
// });


//Ensure you have run 'npm install mongodb'
var MongoClient = require('mongodb').MongoClient;

var username = 'jdigby';
var password = 'aGYxoWdKNi4zrq8sWaAwwKbM';
var hosts = 'iad2-c6-2.mongo.objectrocket.com:53121,iad2-c6-0.mongo.objectrocket.com:53121,iad2-c6-1.mongo.objectrocket.com:53121';
var database = 'users';
var options = '?replicaSet=1ec981ff3bbe4194ac37f886824c7e20';
var connectionString = 'mongodb://' + username + ':' + password + '@' + hosts + '/' + database + options;

// var MongoClient = require('mongodb').MongoClient;

// var username = `${process.env.DB_NAME}`;
// var password = `${process.env.DB_PASS}`;
// var hosts = 'iad2-c6-2.mongo.objectrocket.com:53121,iad2-c6-0.mongo.objectrocket.com:53121,iad2-c6-1.mongo.objectrocket.com:53121';
// var database = `${process.env.DB_DATABASE}`;
// var options = '?replicaSet=1ec981ff3bbe4194ac37f886824c7e20';
// var connectionString = 'mongodb://' + username + ':' + password + '@' + hosts + '/' + database + options;

// MongoClient.connect(connectionString, function(err, db) {
//     if (db) {
//         db.close();
//     }
//     if (err) {
//         console.log('Error: ', err);
//     } else {
//         console.log('Connected!');
//         process.exit();
//     }
//          //database name
//     // const dbName = 'users';
//     // const db = client.db(dbName);

//     // new user
//     var name = 'user' + Math.floor(Math.random()*10000);
//     var email = name + '@jakedigby.com';

//     // Insert into customer table
//     var collection = db.collection('userDetails');
//     var doc = {name, email};
//     collection.insertOne(doc, {w:1}, function(err, result) {
//         console.log('Document Inserted');
//     });
// });

// Connect
MongoClient.connect(connectionString, function(err, db) {
    if (err) {
      console.log('Error: ', err);
    }
    var example_doc = {
          "start" : new Date(),
          "end" : new Date(2015, 9, 28, 14, 17, 23, 0),
          "location" : "Texas",
          "official_game" : false,
          "winner" : "Javi",
          "players" : [
          {
              "name": "Javi",
              "decks": [
                  "Dinosaurs",
                  "Plants"
              ],
              "points": 24,
              "place": 1
          },
          {
              "name": "Seth",
              "decks": [
                  "Spies",
                  "Zombies"
              ],
              "points": 20,
              "place": 2
          },
          {
              "name": "Dave",
              "decks": [
                  "Steampunk",
                  "Wizard"
              ],
              "points": 20,
              "place": 2
          },
          {
              "name": "Castro",
              "decks": [
                  "Shapeshifters",
                  "Ninjas"
              ],
              "points": 18,
              "place": 4
          }
      ]
    };
    var collection = db.collection('objectrocket.init');
    collection.insert(example_doc, {w:1}, function(err, result) {
      if (err) {
        console.log('Error: ', err);
      } else {
        console.log('Inserted a doc!');
        process.exit();
      }
    });
  });
