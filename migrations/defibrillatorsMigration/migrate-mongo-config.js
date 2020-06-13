const config = {
  mongodb: {
    url: 'mongodb://mongodb:27017',
    databaseName: 'defibrillatorDB',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },

  migrationsDir: './migrations/defibrillatorsMigration/migration',

  changelogCollectionName: 'changelog'
};

module.exports = config;
