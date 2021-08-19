import session from "express-session";
const MongoDbStore = require('connect-mongo');
require('dotenv').config();


let DB = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
/**
 * This variable is where save session, in this case is mongodb
 */


/**
 * Config session for app
 * @param app from exactly express module
 */
let config = (app) => {
  app.use(
    session({
        secret: 'story book',
        resave: false,
        saveUninitialized: false,
        store: MongoDbStore.create({
            mongoUrl: DB
        })
    })
  );
  
};

module.exports = {
  config: config,

};