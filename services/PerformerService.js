const DBService = require('./DBService');
const { generateHash, compareValueAndHash } = require('../helpers/encoder');

class PerformerService extends DBService {
  constructor() {
    super('performer');
  }

  async checkCredentials(login, password) {
    const performer = await this.findOne({
      where: {
        $or: [
          { email: login },
          { phone: login },
        ]
      },
    });
    if (performer && compareValueAndHash(password, performer.password)) {
      return performer;
    }
    throw new Error();
  }
}

module.exports = PerformerService;
