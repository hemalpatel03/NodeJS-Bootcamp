const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/person');
const passport = require('passport');

passport.use(new LocalStrategy(async(username, password, done)=>{
    try {
        // console.log('Received Credentials:', USERNAME, password);
        const user = await Person.findOne({username});
        if(!user){
            return done(null, false, {message: 'Incorrect username.'});
        }
            
        const isPasswordMatch = await user.comparePassword(password);
        if(isPasswordMatch){
            return done(null, user);
        }else{
            return done(null, false, {message: 'Incorrect Password.'});
        }
    } catch (err) {
        return done(err);
    }
}));

module.exports = passport;