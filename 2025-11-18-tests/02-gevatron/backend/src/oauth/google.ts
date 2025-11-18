import passport from "passport";
import config from 'config'
import {Strategy as GoogleStrategy} from 'passport-google-oauth2'

passport.use(new GoogleStrategy({
    clientID: config.get('google.clientId'),
    clientSecret: config.get('google.clientSecret'),
    callbackURL: "http://localhost:5376/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

export default passport