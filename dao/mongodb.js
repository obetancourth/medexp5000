const MongoClient = require('mongodb').MongoClient;
//import { MongoClient } from 'mongodb';

let db = null;
let client = null;

const getDb = async () => {
  if (db) {
     return db;
  }
  if (!client) {
    client = await MongoClient.connect(process.env.MONGOURI , {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  db = client.db();
  return db;
 }

 module.exports = getDb;
