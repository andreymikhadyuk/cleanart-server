const passport = require('passport');
const authConfig = require('config').get('auth');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const PerformerService = new require('./PerformerService');
const performerService = new PerformerService();

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: authConfig.jwt.secret,
  }, (jwtPayload, cb) => {
    cb(null, jwtPayload);
  }
));

passport.use('local-login', new LocalStrategy({
  usernameField: 'login',
  passReqToCallback: true,
}, async (req, login, password, done) => {
  try {
    const performer = await performerService.checkCredentials(login, password);
    done(null, performer);
  } catch (err) {
    done(err);
  }
}));
