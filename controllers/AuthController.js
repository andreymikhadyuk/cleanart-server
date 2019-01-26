const passport = require('passport');
require('../services/PassportService');

const ResponseService = require('../services/ResponseService');
const { generateToken } = require('../helpers/token');

const login = (req, res, next) => {
  passport.authenticate('local-login', { session: false }, (err, performer) => {
    if (err || !performer) {
      if (err) console.log(err);
      return ResponseService.sendError(res, err || {});
    }
    ResponseService.sendOk(res, { token: generateToken(performer.id) });
  })(req, res, next);
};

module.exports = {
  login,
};
