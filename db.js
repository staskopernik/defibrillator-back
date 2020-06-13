const mongoose = require('mongoose');

const defaultMongoURI = 'mongodb://mongodb:27017/defibrillatorDB?authSource=defibrillatorDB';
let gfs;

const dbInit = (mongoURI = defaultMongoURI) => {
  mongoose.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  const conn = mongoose.connection;

  conn.on('error', console.error.bind(console, 'connection error:'));
  conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: 'images'
    });

    console.log('connection to database established');
  });
};

const getGFS = () => gfs;

module.exports = { mongoose, dbInit, getGFS };
