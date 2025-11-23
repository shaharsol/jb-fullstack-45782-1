import passport from "passport";
import config from 'config'
import {Strategy as GoogleStrategy, VerifyCallback} from 'passport-google-oauth2'
import UserModel from '../models/User'

interface GoogleProfile {
    id: string;
    displayName: string;
    email: string;
    name: {
      familyName: string;
      givenName: string;
    };
    emails: Array<{
      value: string;
      verified: boolean;
    }>;
    photos: Array<{
      value: string;
    }>;
    provider: string;
    _raw: string; // The raw JSON response from Google
    _json: any; // The parsed JSON response from Google
  }

passport.use(new GoogleStrategy({
    clientID: config.get('google.clientId'),
    clientSecret: config.get('google.clientSecret'),
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile: GoogleProfile , done: VerifyCallback) {
    const { email, displayName } = profile
    const existingUser = await UserModel.findOne({
        where: { username: email }
    })
    // if i found the user in the database, then they already signed up
    // and this is a login operation
    if(existingUser){
        return done(null, existingUser.get({plain: true}))
    }

    // if i reach here, it means, the user is not in the database, which means
    // it is neccassirily a SIGNUP
    const user = await UserModel.create({
        name: displayName,
        username: email,
        password: ''
    })

    if(user) {
        return done (null, user.get({plain: true}))
    }

    done('unknown error')

  }
));

export default passport