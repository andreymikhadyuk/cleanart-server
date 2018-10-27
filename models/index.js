let Sequelize = require('sequelize');
const dbConfig = require('config').get('database');

class DBManager {
  setup(connection) {
    try {
      const Performer = require('./Performer')(Sequelize, connection);
    } catch (error) {
      console.error(error);
    }
  }

  getConnection() {
    if (this.connection) {
      return this.connection;
    }
    this.connection = new Sequelize(dbConfig.dbname, dbConfig.user, dbConfig.password, {
      host: dbConfig.host,
      port: dbConfig.port,
      dialect: dbConfig.dialect,
      define: {
        freezeTableName: true,
        underscored: true,
        underscoredAll: true,
        timestamps: false
      },
    });
    this.setup(this.connection);
    return this.connection;
  }
}

module.exports = DBManager;
