const DBManager = require('../models');
const dbManager = new DBManager();

const models = dbManager.getConnection().models;

class DBService {
  constructor(modelName) {
    this.model = models[modelName];
    this.models = models;
  }

  findById(id) {
    return this.model && this.model.findById(id);
  }

  findOne(options = {}) {
    return this.model && this.model.findOne(options);
  }
}

module.exports = DBService;
