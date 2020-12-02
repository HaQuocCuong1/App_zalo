import mongoose from "mongoose";
import bluebird from "bluebird";

/**
 * Connect to MongoDB
 */
let connectDB = () => {
  mongoose.Promise = bluebird;
  let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  // let URI = `mongodb://alo-chat-27:alo-chat-27@cluster0-shard-00-00.pbiov.mongodb.net:27017,cluster0-shard-00-01.pbiov.mongodb.net:27017,cluster0-shard-00-02.pbiov.mongodb.net:27017/alo-chat_1?ssl=true&replicaSet=atlas-101dzd-shard-0&authSource=admin&retryWrites=true&w=majority`;
  return mongoose.connect(URI, {useMongoClient: true});
};

module.exports = connectDB;
