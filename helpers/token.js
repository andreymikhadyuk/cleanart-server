const jwt = require('jsonwebtoken');
const authConfig = require('config').get('auth');

const generateToken = (id) => {
  const payload = { id };
  const { prefix, secret } = authConfig.jwt;
  return `${prefix} ${jwt.sign(payload, secret)}`;
};

module.exports = {
  generateToken,
};