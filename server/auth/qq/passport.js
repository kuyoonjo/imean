import passport from 'passport';
import {Strategy as QQStrategy} from 'passport-qq';

export function setup(User, config) {
  passport.use(new QQStrategy({
    clientID: config.qq.clientID,
    clientSecret: config.qq.clientSecret,
    callbackURL: config.qq.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({'qq.id': profile.id}).exec()
      .then(user => {
        if (user) {
          return done(null, user);
        }

        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          role: 'user',
          username: profile.emails[0].value,
          provider: 'qq',
          qq: profile._json
        });
        user.save()
          .then(user => done(null, user))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));
}
