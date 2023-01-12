const {userauth}= require('./user.routes');
const {flightauth}= require('./flight');
const {Airauth} = require('./airline')
module.exports={
    userauth,
    flightauth,
    Airauth
}